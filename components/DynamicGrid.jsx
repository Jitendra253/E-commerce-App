import { StyleSheet, Text, View } from "react-native";

const DynamicGrid = () => {
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
            <Text style={{ fontSize: 25, color: 'orange' }}>Dynamic Grid</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    users.map((user) => <Text style={styles.items}>{user.name}</Text>)
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        color: 'white',
        fontSize: 25,
        backgroundColor: 'blue',
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center'

    }
})

export default DynamicGrid;