import { ScrollView, useColorScheme } from 'react-native';
import CatalogItem from './CatalogItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import catalogList from '../../../../assets/json/catalog-list';

import { addCatalogList, addIngredients, toggleIsActive, toggleIsActiveIngr } from '../../../../redux/catalog-reducer';
import { addPizzaToCartAC } from '../../../../redux/cart-reducer';
import { createSelector } from 'reselect';
import { styles } from './styles/CatalogStyles';
import { dark } from './styles/CatalogStylesDark';

const catalogDataSelector = (state) => state.catalogPage.catalogData;
const ingredientsDataSelector = (state) => state.catalogPage.ingredientsData;
const isActiveSelector = (state) => state.catalogPage.isActive;
const isActiveIngrSelector = (state) => state.catalogPage.isActiveIngr;

const memoizedCatalogDataSelector = createSelector(
  catalogDataSelector,
  (catalogData) => catalogData,
);
const memoizedIngredientsDataSelector = createSelector(
  ingredientsDataSelector,
  (ingredientsData) => ingredientsData,
);

const memoizedIsActiveSelector = createSelector(isActiveSelector, (isActive) => isActive);
const memoizedIsActiveIngrSelector = createSelector(isActiveIngrSelector, (isActiveIngr) => isActiveIngr);

export default function Catalog() {
  const dispatch = useDispatch();
  const catalogData = useSelector(memoizedCatalogDataSelector);
  const ingredientsData = useSelector(memoizedIngredientsDataSelector);

  const isActive = useSelector(memoizedIsActiveSelector);
  const isActiveIngr = useSelector(memoizedIsActiveIngrSelector);

  const colorScheme = useColorScheme()

  useEffect(() => {
    dispatch(addCatalogList(catalogList));
  }, [dispatch]);

  const addPizzaToCart = (obj) => {
    dispatch(addPizzaToCartAC(obj));
  };

  // const addIngredientsToPizza = () => {
  //   dispatch(addPizzaToCartAC(obj));
  // }

  const catalogListMap = () => {
    return catalogData.map((item) => {
      return (
        <CatalogItem
          key={item.id}
          onClickAddPizza={addPizzaToCart}
          {...item}
          toggleIsActive={toggleIsActive}
          toggleIsActiveIngr={toggleIsActiveIngr}
          isActive={isActive}
          isActiveIngr={isActiveIngr}
        />
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={colorScheme === 'light' ? styles.catalogWrapper : dark.catalogWrapper}>
      {catalogListMap()}
    </ScrollView>
  );
}
