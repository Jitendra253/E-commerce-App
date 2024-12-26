import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const UseEffectAsComponentDidMount = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(100)

    // useEffect(() => {
    //     console.log("do some animation");
    // }, [count]);

    // useEffect(() => {
    //     console.log("call some api here ");
    // }, [data]);

    return (
        <View>
            <Text style={{ fontSize: 20 }}>{data}useEffect as componentDidUpdate:{count}</Text>

            <Button title="update Counter" onPress={() => setCount(count + 1)} />
            <Button title="update data" onPress={() => setData(data + 1)} />
            <User count={count} data={data} />
        </View>
    );
}

const User = ({ data, count }) => {
    console.log(data)
    console.log(count)
    useEffect(() => {
        console.warn('data form user')
    }, [data])
    return (
        <View>
            <Text style={{ fontSize: 20, color: 'orange' }}>{data}</Text>
        </View>
    );
}
export default UseEffectAsComponentDidMount