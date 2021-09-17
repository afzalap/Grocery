import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = (props) => {
    var [focused, setFocused] = useState(false);

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            height: 42,
            borderWidth: 1.5,
            borderRadius: 8,
            paddingHorizontal: 10,
            alignItems: 'center',
            borderColor: focused ? "#5A20CB" : "#c1c1c1",
        }}
            onFocus={() => { setFocused(true) }}
            onBlur={() => { setFocused(false) }}
        >
            <EvilIcons name="search" size={24} color="#c1c1c1" />
            <TextInput
                {...props}
                editable
                placeholder="search..."
                style={{
                    width: "80%",
                    marginLeft: 7,
                }}
                onFocus={() => { setFocused(true) }}
                onBlur={() => { setFocused(false) }}
            />
        </View>
    );
}

export default SearchBar
