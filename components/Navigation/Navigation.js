import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Catalog from '../Catalog/Catalog';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Catalog />
    </NavigationContainer>
  );
};
