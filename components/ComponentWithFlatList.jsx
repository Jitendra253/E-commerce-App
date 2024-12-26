import { FlatList, StyleSheet, Text, View } from "react-native";
import { UserData } from "./UserData";

const ComponentWithFlatList = () => {
    const users = [
        {
            id: 1,
            name: 'anil',
            email: 'abc@gmail.com'
        },
        {
            id: 2,
            name: 'peter',
            email: 'abc@gmail.com'
        },
        {
            id: 3,
            name: 'brush',
            email: 'abc@gmail.com'
        },
        {
            id: 4,
            name: 'sidhu',
            email: 'abc@gmail.com'
        },
        {
            id: 5,
            name: 'namaste',
            email: 'abc@gmail.com'
        },
        {
            id: 6,
            name: 'namaste',
            email: 'abc@gmail.com'
        },
        {
            id: 7,
            name: 'namaste',
            email: 'abc@gmail.com'
        },
    ]
    return (
        <View>
            <Text style={{ fontSize: 25, color: 'green' }}>Component In loop with flat list</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserData item={item} />}
            />
        </View>
    );
}


export default ComponentWithFlatList;