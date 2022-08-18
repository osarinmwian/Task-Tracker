import { View, Text} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ViewScreen = () => {
  return (
      <View>
         <View style={{backgroundColor:"#B8FDBB", 
         height:128, borderRadius: 10, marginTop:-5}}>
           <Text style={{margin:20, fontSize:14, 
            color:"#000000"}} >I would like to take this opportunity 
          to thank you for providing me with 
          this golden opportunity. 
           </Text>
          </View>
          <View style={{flexDirection:"row", marginTop:4, 
          justifyContent:"space-between",
          backgroundColor:"#B8FDBB", borderRadius:10, height:50}}>
          <View style={{flexDirection:"row", margin:10}}>
            <AntDesign name="picture" size={20} color="black"
             style={{marginRight:10}}/>
            <MaterialCommunityIcons name="bell-outline" 
            size={20} color="black"  style={{marginRight: 10}}/>
            <MaterialCommunityIcons name="palette-outline" 
            size={20} color="black" style={{marginRight: 10}}/>
            <MaterialCommunityIcons name="folder-download-outline" 
            size={20} color="black"  />
            </View >
          <View style={{flexDirection:"row", margin:10}}>
          <MaterialCommunityIcons name="arrow-u-left-top"
           size={20} color="black" style={{marginRight:5}} />
              <MaterialCommunityIcons name="arrow-u-right-top" 
              size={20} color="black" style={{marginRight:16}}/>
             <SimpleLineIcons name="options-vertical" 
             size={16} color="black" style={{marginTop:2}}/>
            </View>
          </View>     
      </View>
  )
};
export default ViewScreen