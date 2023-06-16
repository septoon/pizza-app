import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Catalog from './screens/Catalog/Catalog';
import Cart from './screens/Cart/Cart';
import Tea from './screens/Tea/Tea';

//Screen names
const catalogName = "Catalog";
const cartName = "Cart";
const teaName = "Tea";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
       <Tab.Navigator
        initialRouteName={catalogName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === catalogName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === cartName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === teaName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={catalogName} options={{ headerShown: false }} component={Catalog} />
        <Tab.Screen name={cartName} options={{ headerShown: false }} component={Cart} />
        <Tab.Screen name={teaName} options={{ headerShown: false }} component={Tea} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};
