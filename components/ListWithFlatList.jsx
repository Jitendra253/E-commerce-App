import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListWithFlatList = () => {

    const users = [
        {
            id: 1,
            name: 'anil'
        },
        {
            id: 2,
            name: 'peter'
        },
        {
            id: 3,
            name: 'brush'
        },
        {
            id: 4,
            name: 'sidhu'
        },
        {
            id: 5,
            name: 'namaste'
        },
        {
            id: 5,
            name: 'namaste'
        },
    ]

    return (
        <View>
            <Text style={{ fontSize: 20, color: 'red' }}>Flat List</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        padding: 5,
        color: 'white',
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 2,
        margin: 10
    }
})
export default ListWithFlatList;