import { View, SafeAreaView } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import BottomNavigator from './screen/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    
    <NavigationContainer >
      <SafeAreaView>
        <HomeScreen/>
        </SafeAreaView>
        <BottomNavigator/>

     </NavigationContainer>
  
    
  );
}


