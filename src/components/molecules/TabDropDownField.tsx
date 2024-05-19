import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Colors } from '../../../constants/Colors';
import PropBasedIcon from '../atoms/PropBasedIcon';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from 'react-native-safe-area-context';

type TabDropDownFieldProps = {
    label: string,
    data: string[],
    placeholder: string,
    selectedValue: string,
    onValueChange: (value: string) => void,
};

const TabDropDownField = ({ label, data, placeholder, selectedValue, onValueChange }: TabDropDownFieldProps) => {

    const [isTouched, setIsTouched] = useState(false);
    const [dropDownData, setDropdownData] = useState(data);

    const filterSearchResultsHandler = (enteredText: string) => {
        if (enteredText) {
            let filteredData = data.filter((item) => item.includes(enteredText));
            setDropdownData(filteredData);
        } else {
            setDropdownData(data);
        }
    };

    return (
        <React.Fragment>
            <TouchableOpacity
                style={[styles.tabDropDownFieldContainer, { borderColor: isTouched ? Colors.ForestGreen : Colors.PureWhite }]}
                onPress={() => setIsTouched(!isTouched)}
            >
                <View style={styles.tabDropDownSelector}>
                    <Text style={[styles.tabDropDownFieldLabel, { color: isTouched ? Colors.ForestGreen : Colors.DeepInk }]}>
                        {label}
                    </Text>
                    <Text style={[styles.tabDropDownFieldValue]}>
                        {selectedValue ? selectedValue : placeholder}
                    </Text>
                </View>
                <View style={[styles.tabDropDownSelectorIconContainer, { transform: isTouched ? [{ rotate: '270deg' }] : [{ rotate: '90deg' }] }]}>
                    <PropBasedIcon component={MaterialIcon} name='arrow-forward-ios' color={Colors.SlateGrey} size={18} />
                </View>
            </TouchableOpacity>
            {isTouched ?
                <View style={styles.tabDropDownFieldContent}>
                    <TextInput
                        placeholder='Search...'
                        style={styles.tabDropDownSearchInput}
                        onChangeText={filterSearchResultsHandler}
                    />

                    <FlatList
                        data={dropDownData}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={styles.tabDropDownItem}
                                onPress={() => {
                                    onValueChange(item);
                                    setIsTouched(false);
                                }}
                            >
                                <Text style={styles.tabDropDownItemText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        style={{ marginBottom: 6 }}
                    />

                </View>
                :
                null
            }
        </React.Fragment>
    );
};

export default TabDropDownField;

const styles = StyleSheet.create({
    tabDropDownFieldContainer: {
        width: "100%",
        backgroundColor: Colors.PureWhite,
        borderRadius: 10,
        borderWidth: 1.5,
        paddingHorizontal: 14,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 1,
    },
    tabDropDownSelector: {
        flex: 1,
        rowGap: 8,
        justifyContent: "flex-start"
    },
    tabDropDownFieldLabel: {
        fontFamily: "Roboto Bold",
        fontSize: 14,
        lineHeight: 16.41,
    },
    tabDropDownFieldValue: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.DeepInk
    },
    tabDropDownSelectorIconContainer: {
        justifyContent: 'flex-start',
    },
    tabDropDownFieldContent: {
        width: "100%",
        height: 150,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 1,
        backgroundColor: Colors.PureWhite,
        elevation: 1,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    tabDropDownSearchInput: {
        width: "95%",
        height: 50,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.PearlGray,
        paddingHorizontal: 6,
        alignSelf: "center"
    },
    tabDropDownItem: {
        width: "100%",
        height: 30,
        justifyContent: "center",
    },
    tabDropDownItemText: {
        marginHorizontal: 10,
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 18.75,
        color: Colors.DeepInk
    },
});
