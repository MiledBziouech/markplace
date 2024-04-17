import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllScreen from '../../../Screen/AllScreen.js';
import NftScreen from '../../../Screen/NftScreen.js';
import ItemsScreen from '../../../Screen/ItemsScreen.js';
import BoxScreen from '../../../Screen/BoxScreen.js';
import BoostScreen from '../../../Screen/BoostScreen.js';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            style: {
              backgroundColor: 'transparent', 
              // Set tab bar background color to transparent
            },
            labelStyle: {
                fontSize: 10, // Adjust the font size here (for example, set it to 14)
              },
            activeTintColor: '#FFFFFF', // Set text color of active tab
            inactiveTintColor: '#CCCCCC', // Set text color of inactive tab
          }}
        >
            <Tab.Screen name="All" component={AllScreen} />
            <Tab.Screen name="Nft" component={NftScreen} />
            <Tab.Screen name="Items" component={ItemsScreen} />
            <Tab.Screen name="Box" component={BoxScreen} />
            <Tab.Screen name="Booster" component={BoostScreen} />
        </Tab.Navigator>
    );
}

export default AppNavigator;
