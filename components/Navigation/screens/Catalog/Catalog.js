import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CatalogItem from './CatalogItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import catalogList from '../../../../assets/json/catalog-list'
import { addCatalogList, toggleIsActive } from '../../../../redux/catalog-reducer';
import { addPizzaToCartAC } from '../../../../redux/cart-reducer';
import { createSelector } from 'reselect';

const catalogDataSelector = state => state.catalogPage.catalogData;
const isActiveSelector = state => state.catalogPage.isActive;

const memoizedCatalogDataSelector = createSelector(
  catalogDataSelector,
  catalogData => catalogData
);

const memoizedIsActiveSelector = createSelector(
  isActiveSelector,
  isActive => isActive
);

export default function Catalog() {
  const dispatch = useDispatch();
  const catalogData = useSelector(memoizedCatalogDataSelector);
  const isActive = useSelector(memoizedIsActiveSelector);

  useEffect(() => { 
    dispatch(addCatalogList(catalogList))
  }, [dispatch])
  
  const addPizzaToCart = (obj) => {
    dispatch(addPizzaToCartAC(obj))
  }

  const catalogListMap = () => {
    return catalogData.map(item => {
      return (
        <CatalogItem key={item.id}
            onClickAddPizza={addPizzaToCart}
            {...item}
            toggleIsActive={toggleIsActive}
            isActive={isActive}  />
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.catalogWrapper}>
      { catalogListMap() }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  catalogWrapper: {
    width: '100%',
    height: '100%',
  },
});
