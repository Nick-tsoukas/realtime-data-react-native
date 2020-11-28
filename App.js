import React, { Component, useEffect, useState, setState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import io from 'socket.io-client';

const App = () => {
  const [value, onChangeText] = useState('');

  const log = async () => {
    await console.log(value);
    onChangeText('')
  }

  
    useEffect(() => {
      const socket = io("http://6cc239e13b44.ngrok.io");
      console.log('this is the use effect hook')
    },[]);

    return(
      <View style={styles.screen}>
        <TextInput
          style={{ height: 40, width:100, borderColor: 'black', marginBottom:20, borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Button
        style={{width: '100%'}}
        title="Click Me"
        onPress={log}
        />
      </View>
    )
  };

const styles = StyleSheet.create({
 screen : {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

export default App

