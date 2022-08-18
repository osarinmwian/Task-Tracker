import { View, Text, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HeaderScreen = () => {
  return (
    <View>
        <View style={{display:"flex"}}>
         <View style={{flexDirection:"row", 
         width:"100%", justifyContent:"space-between"}}>
         <Feather name="arrow-left-circle" size={24} color="black" />
           <Text style={{marginTop:18, fontWeight:"600",
            fontSize:18}}> Task Tracker</Text>
           <Image source={require("../assets/status.png")} 
           style={{width: 40, height: 40, 
          resizeMode: "cover", borderRadius:"50%"}}/>
         </View>
      </View>
        <View style={{flexDirection:"row", 
        justifyContent:"space-between", marginTop:20}}>
        <Text style={{fontSize:18}}>Title</Text>
        <View style={{flexDirection:"row"}}>
        <MaterialCommunityIcons name="clipboard-check-outline" size={22}
         color="black" style={{marginRight:10}} />
         <Octicons name="pencil" size={22} color="black" />
        </View>
        </View>
         <Feather/>
    </View>
  )
};

export default HeaderScreen;