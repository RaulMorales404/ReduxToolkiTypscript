import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { Results } from '../screens/Results';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Results" component={Results} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}