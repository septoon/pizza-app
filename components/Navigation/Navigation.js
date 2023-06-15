import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Catalog from './screens/Catalog/Catalog';
import Cart from './screens/Cart/Cart';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="catalog"
          component={Catalog}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
