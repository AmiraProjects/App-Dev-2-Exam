import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';
import realm from '../../store/realm';

const ContactListScreen = props => {
  const [data, setData] = useState([]);
  const {navigation} = props;

  const getData = () => {
    const allData = realm.objects('Contact');
    setData(allData);
  };

  const deleteContact = id => {
    const data = realm.objects('Contact').filtered(`id = ${id}`);
    realm.write(() => {
      realm.delete(data);
    });

    const collectData = realm.objects('Contact');
    setData(collectData);
  };

  useEffect(() => {
    const saveContact = navigation.addListener('focus', () => {
      getData(realm.objects('Contact'));
    });
    return saveContact;
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#82C5EB'}}>
      <FlatList
        data={data}
        contentContainerStyle={{padding: 8}}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={{alignItems: 'center', margin: 8}}>
            <Text>No Contacts Saved</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={styles.mainContainer}>
              <View>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
              </View>

              <TouchableOpacity onPress={() => deleteContact(item.id)}>
                <Icon name="cross" type="entypo" />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <View style={styles.addContactContainer}>
        <TouchableOpacity
          style={styles.addContact}
          onPress={() => navigation.navigate('AddContact')}>
          <Icon name="plus" type="antdesign" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 15,
  },
  addContactContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addContact: {
    backgroundColor: 'lightblue',
    padding: 16,
    borderRadius: 100,
    borderWidth: 1,
  },
});

export default ContactListScreen;
