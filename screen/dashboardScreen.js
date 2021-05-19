import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import headerButton from '../components/headerButton'
import {
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { ThemeConsumer } from 'react-native-elements';

class dashboardScreen extends Component{
  constructor (props){
    super(props);
    this.state = {
      data :[]
    };
  }

  componentDidMount(){
    this.getData();
  }

  getData =() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json});
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    return(
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>

        <FlatList 
          data={this.state.data}
          renderItem={({item, index}) =>
            <View style ={{margin:20}}>
              <Text>Judul : {item.title}</Text>
              <Text>Badan : {item.body}</Text>
            </View>
          }
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity onPress={() => this.getData()}>
          <Text>Refresh Data</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export const dashboardScreenOption = (navData) =>{
  return{
    headerTitle:"Halaman Dashboard"
  }
}

export default dashboardScreen