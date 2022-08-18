import { View, Text, Image } from 'react-native'
import React from 'react'


const TaskBarScreen = () => {
  return (
      <View >
    <View style={{flexDirection:"row", 
    justifyContent:"space-between", marginTop:15}}>
        <View>
        <Image source={require("../assets/component1.png")}
         style={{ resizeMode: "cover",
         marginLeft:10, marginTop:10}}/>
        <Text style={{marginTop:1,
          fontSize:12, color:"#454240"}}>Task1</Text>
        </View>
        <View>
        <Image source={require("../assets/component2.png")} 
        style={{ resizeMode: "cover",
        marginLeft:10, marginTop:10}}/>
        <Text style={{marginTop:1, 
          fontSize:12, color:"#454240"}}>Task2</Text>
        </View>
        <View>
        <Image source={require("../assets/component3.png")} 
        style={{ resizeMode: "cover",
        marginLeft:10, marginTop:10}}/>
        <Text style={{marginTop:1, 
          fontSize:12,color:"#454240"}}>Task3</Text>
        </View>
        <View>
        <Image source={require("../assets/component4.png")} 
        style={{ resizeMode: "cover",marginLeft:10, marginTop:10}}/>
        <Text style={{marginTop:2,fontSize:12, 
          color:"#454240"}}>Task4</Text>
        </View>
        <View>
        <Image source={require("../assets/component5.png")} 
        style={{ resizeMode: "cover",marginLeft:10, marginTop:10}}/>
        <Text style={{marginTop:1, fontSize:12,
           color:"#454240"}}>Task5</Text>
        </View>
        <View >
            <View style={{backgroundColor:"#d2f7dc", 
            borderRadius:20,width:40}}>
            <Image source={require("../assets/component6.png")} 
        style={{ resizeMode: "cover",
        marginLeft:15,marginTop:14}}/> 
            </View>
        <Text style={{marginTop:2, 
          fontSize:12, color:"#34A853"}}>Task6</Text>
        </View>
    </View>
  </View>
  );
}
export default TaskBarScreen;