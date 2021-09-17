import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SearchBar from './components/SearchBar';
import Gcard from './components/Gcard'
import axios from 'axios';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'

import { addItem } from './action/list'
import propTypes from 'prop-types'
import { connect } from 'react-redux'


const App2 = ({addItem, list, filterdList}) => {

    const addItems = async () => {
        try {
            const { data } = await axios.get("https://api.spoonacular.com/recipes/random?apiKey=37420d1a30814a258155ab9266016998")
            const itemName = data.recipes[0].extendedIngredients[0].name;

            const itemToAdd = {
                itemName,
                key: nanoid(),
            }

            addItem(itemToAdd)
        }
        catch (error) {
            const itemName = 'Daily API request quota exceeded only 150 requests per day'

            const itemToAdd = {
                itemName,
                key: nanoid(),
            }

            addItem(itemToAdd)

            console.log(error)

        }
    }

    const filterSearch = (text) => {
        if (text) {
            const data = list.filter((item) => {
                return item.itemName.toLowerCase().includes(text.toLowerCase())
            })
            setFilterdList(data);
        }
        else {
            setFilterdList(list);
        }
    }

    const renderItem = ({ item }) => (
        <Gcard itemName={item.itemName} key={item.key} />
    )

    return (
        <>
            <StatusBar backgroundColor="#5A20CB" />
            <SafeAreaView style={styles.container}>
                <View style={styles.searchBar}>
                    <SearchBar
                        onChangeText={(text) => filterSearch(text)}
                    />
                    <View style={styles.verDivider} />
                    <TouchableOpacity
                        onPress={addItems}
                    >
                        <AntDesign name="plussquare" size={40} color="#5A20CB" />
                    </TouchableOpacity>
                </View>

                <View style={styles.horDivider} />
                <FlatList
                    data={filterdList}
                    keyExtractor={item => item.key}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </>
    );
}

const mapStateToProps = (state) => ({
    list: state.list.list,
    filterdList: state.list.filterdList
})

const mapDispatchToProps = {
    addItem: (item) => addItem(item)
}

App2.propTypes = {
    addItem: propTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App2);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    searchBar: {
        width: "100%",
        marginTop: 23,
        flexDirection: 'row',
        marginBottom: 20,
    },
    verDivider: {
        width: StyleSheet.hairlineWidth,
        backgroundColor: "#5A20CB",
        height: 40,
        marginHorizontal: 10
    },
    horDivider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#5A20CB",
        width: "100%",
        marginBottom: 20
    }
});
