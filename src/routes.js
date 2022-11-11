import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register';
import CardapioHoje from './pages/CardapioHoje';
import ProximosCardapios from './pages/ProximosCardapios';
import InfoUsuario from './pages/InfoUsuario';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="CardapioHoje" component={CardapioHoje}/>
                <AppStack.Screen name="ProximosCardapios" component={ProximosCardapios}/>
                <AppStack.Screen name="InfoUsuario" component={InfoUsuario}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}