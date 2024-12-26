import React, { useEffect, useState } from 'react'
import { Button, Text, View } from "react-native";

const LifeCycle = () => {
    const [count, updateCount] = useState(0);
    useEffect(() => {
        console.warn('use effect');
    }, []);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Life Cycle with use Effect</Text>
            <Text>{count}</Text>
            <Button title='updateCount' onPress={() => updateCount(2)} />
        </View>
    );
}

export default LifeCycle;
