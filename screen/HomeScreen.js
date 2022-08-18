import { View} from 'react-native'
import React from 'react'
import DateScreen from './DateScreen';
import ViewScreen from './ViewScreen';
import HeaderScreen from './HeaderScreen';
import SelectScreen from './SelectScreen';
import TaskScreen from './TaskScreen';
import TaskBarScreen from './TaskBarScreen';
import TimeScreen from './TimeScreen';


const HomeScreen = () => {
return (
    <View style ={{marginLeft:20, 
    marginRight:20}}>
         <View>
          <HeaderScreen/>
          <ViewScreen/>
         <DateScreen/>
         <SelectScreen/>
         <TimeScreen/>
         <TaskScreen/>
         <TaskBarScreen/>
         </View>
      </View>  
    )
};
export default HomeScreen;