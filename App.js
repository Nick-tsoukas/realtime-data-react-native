import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import io from 'socket.io-client';

export default class App extends Component {
  componentDidMount(){
    const socket = io("http://973759e5e99b.ngrok.io");
  }
  
  render(){
    return(
      <View style={styles.screen}>
        <Text>Hello This is the home screen</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
 screen : {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

