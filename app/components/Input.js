import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons"


import Button from "./Button"
const AppTextInput = ({ onPress }) => {

    const [input, setInput] = useState("");
    const handleChange = e => {
        setInput(e)
    }

    return (
        <View style={styles.container} >
            <View style={styles.inputContainer}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput
                    value={input}
                    style={styles.AppTextInput}
                    placeholder="  Search for ie:Batman"
                    placeholderTextColor="black"
                    onChangeText={handleChange}

                />
            </View>
            <Button title="Search" onPress={() => onPress(input, setInput)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        padding: 5,
        // flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    AppTextInput: {

        width: "100%",
    },
    inputContainer: {
        height: 55,
        borderRadius: 15,
        paddingLeft: 20,
        backgroundColor: "#e1e1e1",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }

})
export default AppTextInput