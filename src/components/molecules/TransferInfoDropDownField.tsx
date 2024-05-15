import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Colors } from '../../../constants/Colors';
import PropBasedIcon from '../atoms/PropBasedIcon';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from 'react-native-safe-area-context';

type TransferInfoDropDownFieldProps = {
    label: string,
    data: string[],
    placeholder: string,
    selectedValue: string,
    onValueChange: (value: string) => void,
};

const TransferInfoDropDownField = ({ label, data, placeholder, selectedValue, onValueChange }: TransferInfoDropDownFieldProps) => {

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
                style={[styles.transferInfoDropDownFieldContainer, { borderColor: isTouched ? Colors.ForestGreen : Colors.PureWhite }]}
                onPress={() => setIsTouched(!isTouched)}
            >
                <View style={styles.transferInfoDropDownSelector}>
                    <Text style={[styles.transferInfoDropDownFieldLabel, { color: isTouched ? Colors.ForestGreen : Colors.DeepInk }]}>
                        {label}
                    </Text>
                    <Text style={[styles.transferInfoDropDownFieldValue]}>
                        {selectedValue ? selectedValue : placeholder}
                    </Text>
                </View>
                <View style={[styles.transferInfoDropDownSelectorIconContainer, { transform: isTouched ? [{ rotate: '270deg' }] : [{ rotate: '90deg' }] }]}>
                    <PropBasedIcon component={MaterialIcon} name='arrow-forward-ios' color={Colors.SlateGrey} size={18} />
                </View>
            </TouchableOpacity>
            {isTouched ?
                <View style={styles.transferInfoDropDownFieldContent}>
                    <TextInput
                        placeholder='Search...'
                        style={styles.transferInfoDropDownSearchInput}
                        onChangeText={filterSearchResultsHandler}
                    />

                    <FlatList
                        data={dropDownData}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={styles.transferInfoDropDownItem}
                                onPress={() => {
                                    onValueChange(item);
                                    setIsTouched(false);
                                }}
                            >
                                <Text style={styles.transferInfoDropDownItemText}>{item}</Text>
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

export default TransferInfoDropDownField;

const styles = StyleSheet.create({
    transferInfoDropDownFieldContainer: {
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
    transferInfoDropDownSelector: {
        flex: 1,
        rowGap: 8,
        justifyContent: "flex-start"
    },
    transferInfoDropDownFieldLabel: {
        fontFamily: "Roboto Bold",
        fontSize: 14,
        lineHeight: 16.41,
    },
    transferInfoDropDownFieldValue: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.DeepInk
    },
    transferInfoDropDownSelectorIconContainer: {
        justifyContent: 'flex-start',
    },
    transferInfoDropDownFieldContent: {
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
    transferInfoDropDownSearchInput: {
        width: "95%",
        height: 50,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.PearlGray,
        paddingHorizontal: 6,
        alignSelf: "center"
    },
    transferInfoDropDownItem: {
        width: "100%",
        height: 30,
        justifyContent: "center",
    },
    transferInfoDropDownItemText: {
        marginHorizontal: 10,
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 18.75,
        color: Colors.DeepInk
    },
});
