import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Catalog from './screens/Catalog/Catalog';
import Cart from './screens/Cart/Cart';
import Tea from './screens/Tea/Tea';
import Delivery from './screens/Delivery/Delivery';
import { useColorScheme } from 'react-native';

//Screen names
const catalogName = "Меню";
const cartName = "Корзина";
const teaName = "Чай";
const deliveryName = "Доставка";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const colorScheme = useColorScheme();

  const barHeight = Platform.OS === 'ios' ? 90 : 60

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
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (rn === teaName) {
              iconName = focused ? 'cafe' : 'cafe-outline';
            } else if (rn === deliveryName) {
              iconName = focused ? 'car-sport' : 'car-sport-outline';
            }
        
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { backgroundColor: colorScheme === 'light' ? 'white' : 'black', padding: 10, height: barHeight, borderTopWidth: 0 }
        })}
        >

        <Tab.Screen name={catalogName} options={{ headerShown: false }} component={Catalog} />
        <Tab.Screen name={teaName} options={{ headerShown: false }} component={Tea} />
        <Tab.Screen name={deliveryName} options={{ headerShown: false }} component={Delivery} />
        <Tab.Screen name={cartName} options={{ headerShown: false }} component={Cart} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};
