import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Realm from "realm";
import realm from "../../store/realm";

const AddContactScreen = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const {navigation} = props

    const saveContact = () => {
        if(name !== '' && phoneNumber !== ''){
            realm.write(() => {
                const data = realm.objects('Contact');
                const lastId = data.length === 0 ?
                    1
                    :
                    data[data.length - 1].id;
                realm.create('Contact', {
                    id: data.length === 0 ? lastId : lastId + 1,
                    name: name,
                    phoneNumber: phoneNumber
                })
            })

            navigation.navigate('ContactList');
        }else{
            alert('Cant save your contact')
        }
    }
    return(
        <View style={{backgroundColor: '#82C5EB', flex: 1}}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Name</Text>
                <TextInput 
                    style={styles.inputContact} 
                    placeholder="Name..."
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Phone Number</Text>
                <TextInput 
                    style={styles.inputContact} 
                    placeholder="Phone Number..."
                    onChangeText={text => setPhoneNumber(text)}
                />
            </View>

            <View style={styles.saveButtonContainer}>
                <TouchableOpacity 
                    style={styles.saveButton}
                    onPress={() => saveContact()}
                >
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
        backgroundColor: 'lightblue',
        padding: 16,
        borderRadius: 10,
        borderWidth: 1
    }
})

export default AddContactScreen