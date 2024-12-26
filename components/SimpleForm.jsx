import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SimpleForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false)

    const resetFormData = () => {
        setDisplay(false);
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <View>
            <Text style={{ fontSize: 20 }}> simple form in react </Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Enter User Name"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Enter User Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Enter User Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <View style={{ marginBottom: 10 }}>
                <Button color='green' title="print Details" onPress={() => setDisplay(true)} />
            </View>
            <Button title="Clear Details" onPress={resetFormData} />
            <View>
                {
                    display ?
                        <View>
                            <Text style={{ fontSize: 16 }}>User name is : {name}</Text>
                            <Text>User Password is : {password}</Text>
                            <Text>User Email is:{email}</Text>
                        </View>
                        : null
                }
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    TextInput: {
        fontSize: 18,
        color: 'blue',
        borderColor: 'blue',
        margin: 10,
        borderWidth: 2
    }
})

export default SimpleForm;