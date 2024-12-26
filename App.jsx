import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import SimpleForm from './components/SimpleForm';
import ListWithFlatList from './components/ListWithFlatList';
import CustomListWithMap from './components/CustomListWithMap';
import DynamicGrid from './components/DynamicGrid';
import ComponentWithFlatList from './components/ComponentWithFlatList';
import SectionListEx from './components/SectionListEx';
import LifeCycle from './components/LifeCycle';
import UseEffectAsComponentDidMount from './components/UseEffectAsComponentDidMount';

const App = () => {
  const [name, setName] = useState("Jitendra");
  return (
    <View>
      {/* <SimpleForm /> */}
      {/* <ListWithFlatList /> */}
      {/* <CustomListWithMap /> */}
      {/* <DynamicGrid /> */}
      {/* <ComponentWithFlatList /> */}
      {/* <SectionListEx /> */}
      {/* <LifeCycle /> */}
      <UseEffectAsComponentDidMount />
    </View>
  );
};

export default App;
