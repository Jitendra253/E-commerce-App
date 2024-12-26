import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CustomListWithMap = () => {

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
            id: 6,
            name: 'namaste'
        },
        {
            id: 7,
            name: 'namaste'
        },
        {
            id: 8,
            name: 'namaste'
        },
        {
            id: 9,
            name: 'namaste'
        },
        {
            id: 10,
            name: 'namaste'
        },
        {
            id: 11,
            name: 'namaste'
        },
        {
            id: 12,
            name: 'namaste'
        },
        {
            id: 13,
            name: 'namaste'
        },
        {
            id: 14,
            name: 'namaste'
        },
        {
            id: 15,
            name: 'namaste'
        },
        {
            id: 16,
            name: 'namaste'
        },
        {
            id: 17,
            name: 'last item'
        },
    ]

    return (
        <View>
            <Text style={{ fontSize: 20, color: 'red' }}>Custom list with map</Text>
            <ScrollView style={{ marginBottom: 50 }}>
                {
                    users.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }
            </ScrollView>
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
export default CustomListWithMap;