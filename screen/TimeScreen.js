import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const TimeScreen = () => {
  return (
    <View>
     <View style={{flexDirection:"row"}}>
        <View style={{marginRight:20, marginTop:7}}>
        <MaterialIcons name="timer" size={22} color="black" />
        </View>
        <View style={{flexDirection:"row", marginLeft:10}}>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={{borderWidth:1.7, width:80,
            alignSelf:"center",padding:7,borderRadius:7}}>
            <Text style={{fontSize:13}}>12.00AM</Text>
         </TouchableOpacity >
            <Text style={{marginTop:7}}>-</Text>
            <TouchableOpacity style={{borderWidth:1.7, padding:7,
              alignSelf:"center", marginRight:30, borderRadius:7,
               width:80}}>
            <Text style={{fontSize:13}}>1.00PM</Text>
            </TouchableOpacity>        
          </View>
         <View >
          <TouchableOpacity style={{borderWidth:1.7,
             padding:6, borderRadius:7, width:80, 
             marginRight:10, backgroundColor:"#FDB8B8"}}>
                <Text style={{fontSize:13, padding:3}}>1hr:00:00 </Text>
            </TouchableOpacity>

        </View>
        </View>
       </View>
      </View>
  )
};
export default TimeScreen