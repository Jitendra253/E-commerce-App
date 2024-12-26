import { Text, View, SectionList } from "react-native";

const SectionListEx = () => {

    const users = [
        {
            id: 1,
            name: "Anil",
            data: ["php", "React", "Angular"]
        },
        {
            id: 2,
            name: "peter",
            data: ["java", "js", "HTML"]
        },
        {
            id: 3,
            name: "Sidhu",
            data: ["English", "Odia", "Hindi"]
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 30, color: 'red' }}>Section List</Text>
            <SectionList
                sections={users}
                renderItem={({ item }) => <Text style={{ fontSize: 20, marginLeft: 20 }}>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={{ color: 'red', fontSize: 20 }}>{name}</Text>
                )}
            />
        </View>
    );

}

export default SectionListEx;