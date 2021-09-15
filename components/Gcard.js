import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Gcard = ({itemName}) => {
    return (
        <View style={styles.card2}>
            <Text style={styles.itemName}>
                {itemName}
            </Text>
        </View>
    )
}

export default Gcard;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        height: 50,
        borderBottomColor: "#5A20CB",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    card2: {
        justifyContent: "center",
        height: 50,
        backgroundColor: "#DACBF6",
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 17,
    },
})