import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Chat from '../screens/Chat';


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false,tabBarIcon:({focused,color,size})=> <AntDesign name='home' size={size} color={color}/>}} />
      <Tab.Screen name="Chat" component={Chat} options={{headerShown:false,tabBarIcon:({focused,color,size})=> <AntDesign name='wechat' size={size} color={color}/>}}/>
    </Tab.Navigator>
  );
};


export default TabNavigator;