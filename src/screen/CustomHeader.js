import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

const CustomHeader = ({
    title, color
}) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: color }}>{title}</Text>
           {/* // <View style={{ width: "100%", height: 1, backgroundColor: color }}></View> */}
        </View>

    );
};

export default CustomHeader;