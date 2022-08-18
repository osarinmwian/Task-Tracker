
import React, {useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const MyItem= [

  {
    id:1,
    title: 'Does not repeat',
  },
  {
    id:2,
    title: 'Daily',
  },
  {
    id:3,
    title: 'Weekly on Teusday',
  },
  {
    id:4,
    title: 'Monthly on the last Tuesday',
  },
  {
    id:5,
    title: 'Anually on july 26',
  },
  {
    id:6,
    title: 'Every weekend(Monday to Friday)',
  },
  {
    id:7,
    title: 'Custom..',
    
  },
  
  
];

const Item = ({ title}) => (
    <Text style={[styles.title]}>{title}</Text>
  
);
const SelectScreen =()  => {
  const [dropdown, setDropdown] = useState(null);
    const renderValue= ({ item }) => (
      <Item title={item.title}/>
      
    );
    return (
        <View style={{marginTop:-3}}>
            <Dropdown
                data={MyItem}
                labelField="title"
                 iconColor='black'
                title={[dropdown]}
                renderValue={renderValue}
                onChange={item => {
                setDropdown(item.title); 
               
                }}
                style={{width:"50%", marginLeft:30, border:2}}
                containerStyle={{width:200, borderRadius:30,
                   padding:0, margin:0}}
                    />
        </View>
    )
};
export default SelectScreen;





  
 
