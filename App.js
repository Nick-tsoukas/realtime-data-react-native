import React, { Component, useEffect, useState, setState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import io from 'socket.io-client';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      chats: []
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount(){
    // listen to socket 
    this.socket = io("http://4fd82e3e1347.ngrok.io");
    // listen to message event will set state 
    this.socket.on('message', msg => {
      this.setState({chats: [...this.state.chats, msg]});
    })
  }

   sendMessage = () => {
     console.log(this.state.message)
    //  This emits the message event 
     this.socket.emit('message', this.state.message);
     this.setState({chats : [...this.state.chats, this.state.message]});
     this.setState({message: ''});
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
          <View>
          {this.state.chats.map((chat) => {
            return(
              <Text key={chat}>{chat}fdsafsdf</Text>
            ) 
          })}
          </View>
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



