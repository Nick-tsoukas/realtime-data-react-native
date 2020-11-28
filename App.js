import React, { Component, useEffect, useState, setState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import io from 'socket.io-client';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount(){
    this.socket = io("http://6cc239e13b44.ngrok.io");
  }

   sendMessage = () => {
     console.log(this.state.message)
     this.socket.emit('message', this.state.message);
     this.setState({message: ''})
  }

  render(){
    return(
      <View style={styles.screen}>
        <Text>Hello world</Text>

        <TextInput
        style={{minWidth: 300, borderColor: 'black', borderWidth: 1}}
        value={this.state.message}
        autoCorrect={false}
        onChangeText={message => {
          this.setState({message: message})
        }}
        />
        <Button
        title="Send Chat"
        onPress={this.sendMessage}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
 screen : {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});



