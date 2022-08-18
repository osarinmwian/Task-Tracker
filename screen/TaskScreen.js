import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import {FlatList, StyleSheet, StatusBar } from 'react-native';


const DATA = [
  {
    id:1,
   bg: "#D9D9D9",
    title: 'Contact the CEO of Decagon',
  },
  {
    id:2,
    title: 'Design the onboarding session of Task Tracker App',
    bg: "#CAB8FD",
  },
  {
    id:3,
    title: 'Remind the technical team to include the micro-interactions delivered',
    bg: "#FDB8B8",
  },
];
const Item = ({ title, bg}) => (
  <View style={[styles.item, {flexDirection:"row",
  justifyContent:"space-between", 
  backgroundColor:bg}]}>
    <View style={{paddingRight: 10}}>
    <MaterialCommunityIcons 
    name="checkbox-blank-outline" 
    size={18} color="#5c5e5e" />
    </View>
    <Text style={[styles.title, 
      {flex:1, fontSize:12.5}]}>{title}</Text>
    <View style={{flexDirection: "row"}}>
    <Octicons name="pencil" size={18} 
    color="#5c5e5e"  />
    <MaterialIcons name="delete-outline" 
    size={18} color="#5c5e5e " />
    </View>
  </View>
);
const TaskScreen = () => {
 const renderItem = ({ item }) => (
    <Item title={item.title} bg={item.bg}/>
  );
  return (
   <View style={{marginTop:25}}>
     <View style={{flexDirection:"row", 
     justifyContent:"space-between"}}>
     <View>
     <Text style={{fontStyle:"Regular", 
     fontSize:17}}>Task Created</Text>
      </View>
      <View style={{flexDirection:"row", 
      justifyContent:"space-between", marginLeft:10}}>
      <View>
        <TouchableOpacity style={{flexDirection:"row"}}>
        <AntDesign name="arrowup" size={22} color="#2D2F48" />
        <AntDesign name="arrowdown" size={22} color="#2D2F48" />
        </TouchableOpacity>
      </View>
     </View>
     </View>
      <View style={{marginTop:10}}>
      <FlatList
      showsVerticalScrollIndicator={true}
        data={DATA}  
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  item: {
    padding: 10,
    borderRadius:15,
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
  },
});
export default TaskScreen



   