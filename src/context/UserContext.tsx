import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export type User = {
    userName: string,
    mobileNumber: string
}

export type UserContextType = {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const defaultState = {
    user: { userName: "", mobileNumber: "+201013279477" },
    setUser: (user: User) => { }
} as UserContextType

export const UserContext = createContext(defaultState)

type UserProviderProps = {
    children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {

    const [user, setUser] = useState<User>({
        userName: "",
        mobileNumber: "+201013279477"
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}