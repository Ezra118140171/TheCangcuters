import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import Inputs from '../components/Input';
import Submit from '../components/Submit';

const LoginScreen = props => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/login.jpg")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Selamat Datang!</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{ marginTop: 5 }} />
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <Submit
          title="LOG IN"
          color="#0148a4"
          clidked={() => {
            props.navigation.navigate('dashboardScreen')
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10
  },
  textTitle: {
    fontSize: 35,
    margin: 3
  },
  textBody: {
    fontSize: 16
  }
})

export default LoginScreen
