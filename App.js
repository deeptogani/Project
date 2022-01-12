import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';

//Navigation Components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

//Screens

//Splash
import { Splash } from './src/screens/splash/splash';   

//Permissions
import { Permission } from './src/screens/permissions/permissions';

//Login
import { Login } from './src/screens/login/login';

//User Details
import { UserDetails } from './src/screens/userdetails/userdetails';

//Tab Navigation
import { Tab } from './src/screens/tabnavigation/tab';

const App = () => {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Permission' screenOptions={{headerShown: false}}>

        <Stack.Screen name="Splash" component={Splash} />

        <Stack.Screen name="Permission" component={Permission} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="UserDetails" component={UserDetails} />

        {/*   Bottom Navigation Bar   */}
        <Stack.Screen name="Tab" component={Tab} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App