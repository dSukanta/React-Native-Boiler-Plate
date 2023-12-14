import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './BottomNavigators';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab" component={TabNavigator} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;