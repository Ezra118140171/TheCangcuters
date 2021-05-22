import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, Button, View, Platform } from "react-native";


import LoginScreen from '../screen/LoginScreen';
import dashboardScreen, { dashboardScreenOption } from '../screen/dashboardScreen';
import ProfileScreen, { ProfileScreenOption } from '../screen/ProfileScreen'
import DetailScreen, { DetailScreenOption } from '../screen/DetailScreen'
import PendaftaranScreen, { PendaftaranScreenOption } from '../screen/PendaftaranScreen';

const loginStack = createStackNavigator()
const NavigationLogin = () => {
  return (
    <loginStack.Navigator headerMode="none">
      <loginStack.Screen name="LoginScreen" component={LoginScreen} />
      <loginStack.Screen name="container" component={MealsFavTabNavigator} />
      <loginStack.Screen name="dashboardScreen" component={dashboardScreen} options={dashboardScreenOption} />
      <loginStack.Screen name="Form" component={PendaftaranScreen} options={PendaftaranScreenOption} />
      <loginStack.Screen name="Jadwal Seleksi" component={DetailScreen} options={DetailScreenOption} />
    </loginStack.Navigator>
  )
}

const Stack = createStackNavigator()
const Navigations = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={DetailScreenOption}
      />
    </Stack.Navigator>
  )
}

const ProfileStack = createStackNavigator()
const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profiles" component={ProfileScreen} options={ProfileScreenOption} />
    </ProfileStack.Navigator>
  )
}

const PedaftaranStack = createStackNavigator()
const PedaftaranNavigation = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profiles" component={PendaftaranScreen} options={ProfileScreenOption} />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        //activeColor: Color.accentColor,
        activeColor: 'red',
        barStyle: {
          //backgroundColor: Color.primaryColor,
          backgroundColor: 'red',
        },
      }}
    >
      <Tab.Screen
        name="Daftar Asprak"
        component={PendaftaranScreen}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="easel-outline"
                size={25}
                //color={Color.primaryColor}
                color="#0148a4"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                //color={Color.primary}
                color="#b53737"
                onPress={() => {
                  props.navigation.navigate("LoginScreen");
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
    >
      <Drawer.Screen name="Dashboard" component={Navigations} options={{
        drawerIcon: (props) => (
          <Ionicons
            name={Platform.OS === "android" ? "clipboard-outline" : "clipboard-outline"}
            size={23}
            color={props.color}
          />
        ),
      }} />

      <Drawer.Screen name="Profile" component={ProfileNavigation} options={{
        drawerIcon: (props) => (
          <Feather name="user-check" size={23} color={props.color} />
        ),
      }} />

    </Drawer.Navigator>
  );
};

export default Navigator = () => {
  return (
    <NavigationContainer>
      <NavigationLogin />
    </NavigationContainer>
  )
}