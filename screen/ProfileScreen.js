import React from 'react'
import {View,Text,Platform,Image,SafeAreaView,StyleSheet,ScrollView} from 'react-native'
import {
    Avatar,
    Title,
    Caption,
} from 'react-native-paper';
import {HeaderButton, Item} from 'react-navigation-header-buttons'
import {DrawerActions} from '@react-navigation/native'

const ProfileScreen = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image 
                    source={{
                        uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                    }}
                    size={80}
                    />
                    <View style={{marginLeft: 20}}>
                    <Title style={[styles.title, {
                        marginTop:15,
                        marginBottom: 5,
                    }]}>John Doe</Title>
                    <Caption style={styles.caption}>@j_doe</Caption>
                    </View>
                </View>
                </View>

                <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Text style={{color:"#777777", marginLeft: 20}}>Bandar Lampung, Lampung</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{color:"#777777", marginLeft: 20}}>0895600950107</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export const ProfileScreenOption = (navData) => {
    return {
        headerTitle: "Profil Anda",
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,
    }
})

export default ProfileScreen;