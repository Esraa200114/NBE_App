import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import PropBasedIcon from '../atoms/PropBasedIcon';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants/Colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
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
    const [dropdownShown, setDropdownShown] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownShown(!dropdownShown);
        setIsTouched(true);
    };

    const handleSelect = (text: string) => {
        const selectedItem = data.find((item) => item.key === text);
        if (selectedItem) {
            onValueChange(selectedItem.value);
            console.log(text);
        } else {
            console.error('Selected item not found');
        }
        setDropdownShown(false);
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
            <TouchableOpacity onPress={handleDropdownToggle}>
                <View style={[styles.tabDropDownBox, {
                    borderColor: activeColors.PureWhite,
                }]}>
                    <Text style={[styles.tabDropDownFieldValue, { color: selectedValue ? activeColors.DeepInk : activeColors.SlateGrey }]}>
                        {selectedValue || placeholder}
                    </Text>
                    <View
                        style={[
                            styles.tabDropDownSelectorIconContainer,
                            { transform: dropdownShown ? [{ rotate: '270deg' }] : [{ rotate: '90deg' }] },
                        ]}
                    >
                        <PropBasedIcon
                            component={MaterialIcon}
                            name="arrow-forward-ios"
                            color={activeColors.SlateGrey}
                            size={18}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {dropdownShown && (
                <SelectList
                    data={data}
                    closeicon={<PropBasedIcon component={FontAwesome5Icon} color={activeColors.DeepInk} name='times' size={16} />}
                    searchPlaceholder='Search'
                    setSelected={(text: string) => handleSelect(text)}
                    dropdownStyles={{ width: '100%', borderColor: activeColors.PureWhite }}
                    inputStyles={{ width: '100%', paddingHorizontal: 8 }}
                    dropdownTextStyles={{
                        color: activeColors.DeepInk,
                        fontFamily: "Roboto Regular",
                        fontSize: 14,
                        lineHeight: 18.75,
                    }}
                    boxStyles={{ borderColor: activeColors.PureWhite, backgroundColor: activeColors.PearlGray, marginTop: 10, justifyContent: "center", alignItems: "center" }}
                    arrowicon={<View
                        style={[
                            styles.tabDropDownSelectorIconContainer,
                            { transform: [{ rotate: '90deg' }] } // Wrap in an array
                        ]}
                    >
                        <PropBasedIcon
                            component={MaterialIcon}
                            name="arrow-forward-ios"
                            color={activeColors.DeepInk}
                            size={16}
                        />
                    </View>}
                    dropdownShown={false}
                    searchicon={<PropBasedIcon component={FontAwesome5Icon} color={activeColors.DeepInk} name='search' size={16} />
                    }

                />
            )}
        </View>
    );
};

export default TabDropdownSelectList;

const styles = StyleSheet.create({
    tabDropDownFieldContainer: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1.5,
        paddingHorizontal: 14,
        paddingVertical: 12,
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
    },
    tabDropDownFieldValue: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
    },
    tabDropDownBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 8
    },
    tabDropDownSelectorIconContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    tabDropDownItemText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 18.75,
    },
});
