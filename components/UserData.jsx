import { View, Text, StyleSheet } from "react-native";
export const UserData = (props) => {
    const item = props.item;
    return (
        <View style={styles.box}>
            <Text style={styles.items}>{item.name}</Text>
            <Text style={styles.items}>{item.email}</Text>
        </View>
    );
};

export const styles = StyleSheet.create({
    items: {
        fontSize: 20,
        color: 'orange',
        flex: 1,
        margin: 2,
        textAlign: 'center'
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 10
    }
})
