import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Inputs from '../components/Input';
import Submit from '../components/Submit';

const PendaftaranScreen = (props) => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Pendaftaran</Text>
                <Inputs name="Nama" icon="user" />
                <Inputs name="NIM" icon="user" />
                <Inputs name="Alamat" icon="user" />
                <Inputs name="Prodi" icon="user" />
                <Inputs name="Angkatan" icon="user" />
                <View style={{ marginTop: 5 }} />
                <Submit
                    title="LOG IN"
                    color="#0148a4"
                    clidked={() => {
                        props.navigation.navigate('container')
                    }}
                />
            </View>
        </ScrollView>
    );
};

export const PendaftaranScreenOption = (navData) => {
    return {
        headerTitle: "Pendaftaran",
    };
};

const styles = StyleSheet.create({
    container:{
        flex :1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:400,
        height:250,
        marginVertical:10
    },
    textTitle:{
        fontSize:35,
        margin:3
    },
    textBody:{
        fontSize:16
    }
})

export default PendaftaranScreen;
