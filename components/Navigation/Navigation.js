import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Catalog from './screens/Catalog/Catalog';
import Cart from './screens/Cart/Cart';
import Tea from './screens/Tea/Tea';
import Delivery from './screens/Delivery/Delivery';

//Screen names
const catalogName = "Catalog";
const cartName = "Cart";
const teaName = "Tea";
const deliveryName = "Delivery";

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
            } else if (rn === deliveryName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
        
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 90 }
        })}
        >

        <Tab.Screen name={catalogName} options={{ headerShown: false }} component={Catalog} />
        <Tab.Screen name={cartName} options={{ headerShown: false }} component={Cart} />
        <Tab.Screen name={teaName} options={{ headerShown: false }} component={Tea} />
        <Tab.Screen name={deliveryName} options={{ headerShown: false }} component={Delivery} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};
