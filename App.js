import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SearchBar from './components/SearchBar';
import Gcard from './components/Gcard';
import axios from 'axios';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'


const App = () => {


  const [list, setList] = useState([])
  const [filterdList, setFilterdList] = useState([])

  const addItem = async () => {
    try {
      const { data } = await axios.get("https://api.spoonacular.com/recipes/random?apiKey=140922453fb6490783aa8cfbbeee768f")
      const itemName = data.recipes[0].extendedIngredients[0].name;

      const itemToAdd = {
        itemName,
        key: nanoid(),
      }

      if (list.length == 0) {
        setList([itemToAdd])
        setFilterdList([itemToAdd])
      }

      setList([...list, itemToAdd])
      setFilterdList([...list, itemToAdd])

      console.log(itemToAdd)
      console.log(list)
    }
    catch (error) {
      const itemName = 'Daily API request quota exceeded only 150 requests per day'

      const itemToAdd = {
        itemName,
        key: nanoid(),
      }

      if (list.length == 0) {
        setList([itemToAdd])
        setFilterdList([itemToAdd])
      }

      setList([...list, itemToAdd])
      setFilterdList([...list, itemToAdd])

    
      console.log(error)
      
    }
  }

  const filterSearch = (text) => {
    if (text) {
      const data = list.filter(( item ) => {
        return item.itemName.toLowerCase().includes(text.toLowerCase())
      })
      setFilterdList(data);
    }
    else {
      setFilterdList(list);
    }
  }

  const renderItem = ({ item }) => (
    <Gcard itemName={item.itemName} />
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
            onPress={addItem}
          >
            <AntDesign name="plussquare" size={40} color="#5A20CB" />
          </TouchableOpacity>
        </View>

        <View style={styles.horDivider} />
        <FlatList
          data={filterdList}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
}

export default App;

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
