import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Stats from './pages/stats';
import About from './pages/about'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Stats" component={Stats}/>
                <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}