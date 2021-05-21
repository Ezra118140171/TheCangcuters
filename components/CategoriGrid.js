import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
    Image
} from "react-native";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return(
            <Text>
                Pembukaan Asisten Praktikum Pendaftaran Asprak 2020 telah dibuka
            </Text>
        );
    }
    return(
        <Text>
            Ikuti seleksi ujian sesuai dengan waktu di jadwal seleksi
        </Text>
    );
}

const CategoriGridTile = (props) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.GridItem}>
        <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
            <View style={styles.container}>
                <Image source={{uri:props.image}} style={styles.image} />
                <Text style={styles.title} numberOfLines={2}>
                {props.title}
                </Text>
            </View>
        </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height:'100%',
        width:'100%'
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    GridItem: {
        flex: 1,
        margin: 5,
        height: 150,
        borderRadius: 10,
        overflow:
        Platform.OS === "android" && Platform.Version > 21 ? "hidden" : "visible",
        elevation: 5,
        marginBottom:0
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.20,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 10,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        textAlign: 'auto',
        color:"#3234e3"
    },
});
export default CategoriGridTile;