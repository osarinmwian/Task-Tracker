import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, 
    TouchableWithoutFeedback, Text, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default class BottomNavigator extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
             }}>
                 <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10
                    }}>
                     <TouchableWithoutFeedback onPress={this.toggleOpen}>
                        <View style={[styles.button, styles.actionBtn]}>

                            <Image style={{ width:80, height: 90 }}
                                resizeMode="contain"
                                source={require('../assets/button.png')} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{

                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25
                      }}>

                    <View style={{flexDirection: 'column', 
                    alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <MaterialCommunityIcons
                             name="home-outline" size={25} color="#34A853" />

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',
                         alignItems:'center', color:"#34A853", 
                         fontSize:12}}>Home</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',
                        justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            onPress={() => { Alert.alert("click") }}
                        >
                            <Ionicons name="search-outline" size={24} 
                            color="black" style={{color:"#5c5a58"}} />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',
                        alignItems:'center',color:"#5c5a58",
                        fontSize:12}}>search </Text>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',
                             justifyContent:'space-between',marginStart:20,
                        }}>

                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Ionicons name="notifications-outline" 
                                size={23} color="black" style={{color:"#5c5a58"}}/>
                       
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center',
                            marginRight:1, marginBottom:10,color:"#5c5a58", 
                            fontSize:12, marginLeft:13}}>Notifications</Text>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',
                            justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity onPress={() => 
                                { Alert.alert("click") }} >
                                <Ionicons name="ios-settings-outline"
                                 size={23} color="#5c5a58"  />
                         </TouchableOpacity>
                            <Text style={{justifyContent:'center',
                            alignItems:'center',color:"#5c5a58", 
                            fontSize:12, marginTop:2
                            ,marginBottom:10}}>Setting </Text>
                     </View>
                </View>
            </View>
        );
    }   
}
const styles = StyleSheet.create({
     MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,
     },
});