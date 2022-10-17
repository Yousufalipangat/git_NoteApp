

import React, { useState } from 'react';

import {
  AsyncStorage,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


const App = () => {
  const [data, setdata] = useState("");
  const [message,setmessage] = useState("");

  const add = async () => {
    try {
      await AsyncStorage.setItem('data', data)
      setmessage('Data stored')
    } catch (e) {
      console.log(e);
    }
  }

  const get = async () => {
    try {
      const data = await AsyncStorage.getItem('data')
    
      if (data != null) {
        setdata(data)
        setmessage('data retrieved')
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <SafeAreaView style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text>{data}</Text>
        <TextInput value={data} onChangeText={(event) => setdata(event)} placeholder='type/edit data here' style={{ borderWidth: 1, margin: 10, borderRadius: 10, width: 200, height: 50 }} />
      </View>
      <View style={{ width: 200, height: 50, borderRadius: 10 }}>
        <Button
          title='add'
          onPress={add}
        />
      </View>
      <View style={{ width: 200, height: 50, borderRadius: 10 }}>
        <Button
          title='get'
          onPress={get}
        />
      </View>
      <Text>{message}</Text>
    </SafeAreaView>
  );


};
export default App;
