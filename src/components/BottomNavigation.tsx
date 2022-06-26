import {View, Text} from 'react-native';
import React from 'react';
import {Home} from '../screens';
import TransactionHistory from '../screens/TransactionHistory';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transaction History" component={TransactionHistory} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
