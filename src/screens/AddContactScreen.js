import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const AddContactScreen = () => {
    return(
        <View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Name</Text>
                <TextInput style={styles.inputContact} placeholder="Name..."/>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Phone Number</Text>
                <TextInput style={styles.inputContact} placeholder="Phone Number..."/>
            </View>

            <View style={styles.saveButtonContainer}>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={{fontWeight: 'bold'}}>Save Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameContainer: {
        margin: 16,
        marginBottom: 0
    },
    name: {
        marginBottom: 8,
        fontWeight: 'bold',
    },
    inputContact: {
        height: 40,
        borderRadius: 10,
        paddingLeft: 8,
        paddingRight: 8,
        borderColor: 'black',
        borderWidth: 1
    },
    saveButtonContainer: {
        alignItems: 'center',
        margin: 16
    },
    saveButton: {
        backgroundColor: '#B7F1D4',
        padding: 16,
        borderRadius: 10,
    }
})

export default AddContactScreen