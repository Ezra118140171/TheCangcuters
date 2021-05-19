// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import {Button, View, Text, SafeAreaView, Image} from 'react-native';
import { Container, Content, Card, CardItem, Body, ListItem, Thumbnail, Left, H3 } from 'native-base';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
       <ListItem>
      <Left>
      <Thumbnail 
      source={{
        uri: 'https://assets-a1.kompasiana.com/items/album/2019/11/16/cewek-lucu-5dcf72f1097f363619284da2.jpg?t=o&v=770'
      }}
      />
      </Left>
      <Body>
        <H3>Della</H3>
        <Text>S1 Teknik Informatika (IF)</Text>
      </Body>
      </ListItem>
        <Content padder>
          <Card style={{margin:5, backgroundColor:'#0058A3', borderRadius: 10}}>
          <CardItem header button onPress={() => navigation.navigate('JadwalSeleksi') }>
          <Image source={require('../assets/jadwal.png')} />
           <View style={{flex:1, flexDirection:'row', padding: 10, marginLeft: 15}}>
            <Text style={{flex:1, fontSize: 18}}>Jadwal Seleksi</Text>
            <Text style={{flex:1, fontSize: 18, marginRight: -170}}>></Text>
           </View>
           </CardItem>
           </Card>

          <Card style={{margin:5, backgroundColor:'#0058A3', borderRadius: 10}}>
          <CardItem header button onPress={() => navigation.navigate('Pendaftaran')}>
          <Image source={require('../assets/pendaftaran.png')} />
           <View style={{flex:1, flexDirection:'row', padding: 10, marginLeft: 15}}>
            <Text style={{flex:1, fontSize: 18}}>Pendaftaran Asprak</Text>
            <Text style={{flex:1, fontSize: 18, marginRight: -170}}>></Text>
           </View>
           </CardItem>
           </Card>

           <Card style={{margin:5, backgroundColor:'#0058A3', borderRadius: 10}}>
          <CardItem header button onPress={() => navigation.navigate('Hasil')}>
          <Image source={require('../assets/hasil.png')} />
           <View style={{flex:1, flexDirection:'row', padding: 10, marginLeft: 15}}>
            <Text style={{flex:1, fontSize: 18}}>Hasil Seleksi</Text>
            <Text style={{flex:1, fontSize: 18, marginRight: -170}}>></Text>
           </View>
           </CardItem>
           </Card>
        
        </Content>
 
       
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;