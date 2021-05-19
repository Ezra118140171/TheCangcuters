// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const Hasil = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is Hasil under Second Page Option
          </Text>
          <Button
            title="Go to First Page"
            onPress={() => navigation.navigate('FirstPage')}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate('ThirdPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hasil;