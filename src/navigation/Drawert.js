import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import MaterialBottomTab from './MaterialBottomTab';
const Drawer = createDrawerNavigator();

const Drawert = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="MaterialBottomTab"
        component={MaterialBottomTab}
      />
    </Drawer.Navigator>
  );
};

export default Drawert;
