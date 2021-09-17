import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import propTypes from 'prop-types'
import { deleteItem } from "../action/list";
import { connect } from "react-redux";


const Gcard = ({ itemName, deleteItem}) => {

    return (
        <View style={styles.card2}>
            <Text style={styles.itemName}>
                {itemName}
            </Text>
            <TouchableOpacity
                onPress={() => deleteItem(itemName)}
            >
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = {
    deleteItem: (itemName) => deleteItem(itemName)
}

Gcard.propTypes = {
    deleteItem: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Gcard);

const styles = StyleSheet.create({
    card2: {
        justifyContent: "space-between",
        height: 50,
        backgroundColor: "#DACBF6",
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    itemName: {
        fontSize: 17,
    },
})