import {View, Text, Platform, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Input} from '../components';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const Test2 = () => {
  const [phonebook, setPhonebook] = useState([]);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [refresh, setrefresh] = useState(0);

  console.log(name);
  console.log(phone);

  const addNewNumber = () => {
    axios.post('http://10.0.2.2:8080/add-phone', {name, phone});
    setrefresh(refresh + 1);
  };

  const deletePhone = (id) => {
    axios.delete(`http://10.0.2.2:8080/delete-phone/${id}`);
    setrefresh(refresh + 1);
  };

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8080/get-phone')
      .then((res) => {
        // console.log(res);
        setPhonebook(res.data.data.phoneNumbers);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  return (
    <>
      <ScrollView
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>
        <View>
          <Input
            placeholder="name"
            onChangeText={(value) => setName(value)}></Input>
          <Input
            placeholder="phone"
            onChangeText={(value) => setPhone(value)}></Input>
        </View>

        <Button onPress={addNewNumber} color={'#00a69c'}>
          <Text>Send</Text>
        </Button>

        {phonebook.map((index) => {
          return (
            <View key={index._id} style={{marginVertical: 5}}>
              <Text>{index.name}</Text>
              <Text>{index.phone}</Text>
              <Text>{index._id}</Text>
              <Button
                onPress={() => {
                  deletePhone(index._id);
                }}
                color={'#FF0000'}>
                <Text>Delete</Text>
              </Button>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Test2;
