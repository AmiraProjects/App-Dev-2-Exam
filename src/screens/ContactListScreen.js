import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'

const ContactListScreen = () => {
  const [data, setData] = useState([])
  const {navigation} = props
  
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        contentContainerStyle={{padding: 8}}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return(
            <View style={styles.mainContainer}>
              <View>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
              </View>

              <TouchableOpacity>
                <Icon
                  name='cross'
                  type='entypo'
                />
              </TouchableOpacity>
            </View>
          )
        }}/>

        <View style={styles.addContactContainer}>
          <TouchableOpacity 
            style={styles.addContact}
            // onPress={() => }
            >
            <Icon
              name='plus'
              type='antdesign'
              size={24}
            />
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 28
  },
  addContactContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addContact: {
    backgroundColor: '#B7F1D4',
    padding: 16,
    borderRadius: 100
  },
})

export default ContactListScreen