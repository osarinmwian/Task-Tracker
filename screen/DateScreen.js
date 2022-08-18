import { View, Text,Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import DatePicker from 'react-native-neat-date-picker'



const DateScreen= () => {
  const [showDatePicker, 
    setShowDatePicker] = useState(false)
  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    setShowDatePicker(false)
  }

  const onConfirm = (output) => {
    setShowDatePicker(false)
    console.log(output.date)
    console.log(output.dateString)

  }
  return (
      <View>
          <View style={{marginTop:20,flexDirection:"row"}}>
             <View>
             <Octicons name="clock" size={16} color="black" />
             </View>
          <View style={{flexDirection:"row", marginTop:-10}}>
          < Button title={'Jul 26,2022 '} onPress={openDatePicker}
           color="#2e2b29" />
        <DatePicker
          isVisible={showDatePicker}
          mode={'single'}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
        <TouchableOpacity>
        <Text style={{fontSize:17, marginTop:8, 
          marginLeft:5, color:"#2e2b29"}}>12.00 AM</Text>
        </TouchableOpacity>
        </View>
          <View style={{flexDirection:"row", marginLeft:70}}>
          <Fontisto name="checkbox-passive" size={16} color="black" 
          style={{ borderRadius:20}}/>
          <Text style={{marginLeft:10, 
            marginRight:5, 
            fontSize:17}}>All day</Text>
          </View>
          </View>
      </View>
   
  )
};
export default DateScreen;