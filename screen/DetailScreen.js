import React from "react";
import { View, Text } from "react-native";

const DetailScreen = (props) => {
    return (
        <View>
            <Text>
                Jadwal
            </Text>
        </View>
    );
};

export const DetailScreenOption = (navData) => {
    return {
        headerTitle: "Jadwal",
    };
};

export default DetailScreen;
