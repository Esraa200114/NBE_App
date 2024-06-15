import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Components
import { SelectList } from 'react-native-dropdown-select-list';
import PropBasedIcon from '../atoms/PropBasedIcon';

// Icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

// Colors
import { Colors } from '../../../constants/Colors';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

type TabDropDownFieldProps = {
    label: string,
    data: { key: string, value: string }[],
    placeholder: string,
    selectedValue: string,
    onValueChange: (value: string) => void,
};

const TabDropdownSelectList = ({ label, data, placeholder, selectedValue, onValueChange }: TabDropDownFieldProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [isTouched, setIsTouched] = useState(false);

    const handleSelect = (text: string) => {
        const selectedItem = data.find((item) => item.key === text);
        if (selectedItem) {
            onValueChange(selectedItem.value);
        } else {
            console.error('Selected item not found');
        }
        setIsTouched(false);
    };

    return (
        <View
            style={[
                styles.tabDropDownFieldContainer,
                {
                    borderColor: isTouched ? activeColors.ForestGreen : activeColors.PureWhite, backgroundColor: activeColors.PureWhite, shadowColor: activeColors.MidnightBlack,
                },
            ]}
        >
            <Text style={[styles.tabDropDownFieldLabel, { color: isTouched ? activeColors.ForestGreen : activeColors.DeepInk }]}>
                {label}
            </Text>
            <SelectList
                data={data}
                closeicon={<PropBasedIcon component={FontAwesome5Icon} color={activeColors.DeepInk} name='times' size={16} />}
                searchPlaceholder='Search'
                setSelected={(text: string) => handleSelect(text)}
                dropdownStyles={{ borderColor: activeColors.SlateGrey, margin: 8 }}
                inputStyles={{ ...styles.selectListInputStyles, color: activeColors.DeepInk }}
                dropdownTextStyles={{ ...styles.selectListDropDownTextStyles, color: activeColors.DeepInk }}
                boxStyles={{ borderColor: activeColors.PureWhite, backgroundColor: activeColors.PureWhite, ...styles.selectListBoxStyles }}
                arrowicon={<View
                    style={[
                        styles.tabDropDownSelectorIconContainer,
                        { transform: [{ rotate: '90deg' }] }
                    ]}
                >
                    <PropBasedIcon
                        component={MaterialIcon}
                        name="arrow-forward-ios"
                        color={activeColors.SlateGrey}
                        size={18}
                    />
                </View>}
                dropdownShown={false}
                search={false}
            />
        </View>
    );
};

export default TabDropdownSelectList;

const styles = StyleSheet.create({
    tabDropDownFieldContainer: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1.5,
        marginVertical: 6,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 1,
    },
    tabDropDownFieldLabel: {
        fontFamily: 'Roboto Bold',
        fontSize: 14,
        lineHeight: 16.41,
        paddingHorizontal: 14,
        paddingTop: 12,
    },
    tabDropDownSelectorIconContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    selectListInputStyles: {
        width: '100%',
    },
    selectListDropDownTextStyles: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 18.75,
    },
    selectListBoxStyles: {
        justifyContent: "center",
        alignItems: "center",
    }
});
