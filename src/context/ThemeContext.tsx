import React, { ReactNode, createContext, useState, useEffect } from "react";
import { Alert, Appearance, useColorScheme } from "react-native";
import { fetchData, storeData } from "../config/asyncStorage";

type ThemeContextType = {
    theme: { mode: string };
    updateTheme: (newTheme?: { mode: string }) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: { mode: "light" },
    updateTheme: () => { },
});

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState({ mode: systemColorScheme === "dark" ? "dark" : "light" });

    const updateTheme = (newTheme?: { mode: string }) => {
        if (!newTheme) {
            const mode = theme.mode === "dark" ? "light" : "dark";
            newTheme = { mode };
        }
        setTheme(newTheme);
        storeData("Apptheme", newTheme);
    };

    // Monitor the system for theme changes
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme({ mode: colorScheme === "dark" ? "dark" : "light" });
        });

        return () => subscription.remove();
    }, []);

    const fetchStoredTheme = async () => {
        try {
            const themeData = await fetchData("Apptheme");
            if (themeData) {
                setTheme(themeData);
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    useEffect(() => {
        fetchStoredTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
