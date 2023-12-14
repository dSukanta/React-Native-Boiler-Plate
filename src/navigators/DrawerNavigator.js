import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './BottomNavigators';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;