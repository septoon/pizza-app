import { Pressable, ScrollView, Text, View, useColorScheme } from 'react-native';
import CatalogItem from './CatalogItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import catalogList from '../../../../assets/json/catalog-list';

import { addCatalogList, toggleIsActive } from '../../../../redux/catalog-reducer';
import { addPizzaToCartAC } from '../../../../redux/cart-reducer';
import { createSelector } from 'reselect';
import { styles } from './styles/CatalogStyles';
import { dark } from './styles/CatalogStylesDark';
import { ingredientsList } from '../../../../assets/json/ingredients'
import Modal from 'react-native-modal'

import AddIngredients from '../../../../assets/img/add-ingredients.svg'
import { addIngredientsAC } from '../../../../redux/ingredients-reducer';

const catalogDataSelector = (state) => state.catalogPage.catalogData;
const ingredientsDataSelector = (state) => state.ingredientsPage.ingredientsData;
const ingredientsCountSelector = (state) => state.ingredientsPage.ingredientsCount;
const ingredientsPriceSelector = (state) => state.ingredientsPage.ingredientsPrice;
const isActiveSelector = (state) => state.catalogPage.isActive;

const memoizedCatalogDataSelector = createSelector(
  catalogDataSelector,
  (catalogData) => catalogData,
);

const memoizedIngredientsDataSelector = createSelector(
  ingredientsDataSelector,
  (ingredientsData) => ingredientsData,
);

const memoizedIngredientsCountSelector = createSelector(
  ingredientsCountSelector,
  (ingredientsCount) => ingredientsCount,
);
const memoizedIngredientsPriceSelector = createSelector(
  ingredientsPriceSelector,
  (ingredientsPrice) => ingredientsPrice,
);

const memoizedIsActiveSelector = createSelector(isActiveSelector, (isActive) => isActive);

export default function Catalog() {
  const dispatch = useDispatch();
  const catalogData = useSelector(memoizedCatalogDataSelector);
  const ingredientsData = useSelector(memoizedIngredientsDataSelector);
  const ingredientsCount = useSelector(memoizedIngredientsCountSelector);
  const ingredientsPrice = useSelector(memoizedIngredientsPriceSelector);
  const [isModalActive, setIsModalActive] = useState(false)
  const [btnPressed, setBtnPressed] = useState(null)

  const isActive = useSelector(memoizedIsActiveSelector);

  const colorScheme = useColorScheme()

  useEffect(() => {
    dispatch(addCatalogList(catalogList));
  }, [dispatch]);

  const addPizzaToCart = (obj) => {
    dispatch(addPizzaToCartAC(obj));
  };

  const addIngredients = (obj) => {
    dispatch(addIngredientsAC(obj));
  }

  const toggleModal = () => {
    setIsModalActive(!isModalActive);
  };

  

  const catalogListMap = () => {
    return catalogData.map((item) => {
      return (
        <CatalogItem
          key={item.id}
          onClickAddPizza={addPizzaToCart}
          onClickAddIngredients={addIngredients}
          {...item}
          ingredientsData={ingredientsData}
          ingredientsCount={ingredientsCount}
          ingredientsPrice={ingredientsPrice}
          setIsModalActive={setIsModalActive}
          toggleModal={toggleModal}
          isActive={isActive}
        />
      );
    });
  };

  return (
    <>
      <Modal isVisible={isModalActive}
            onSwipeComplete={() => setIsModalActive(false)}
            onBackdropPress={() => setIsModalActive(false)}
            swipeDirection="down"
            style={{ margin: 0, justifyContent: 'flex-end' }}>
        <View style={colorScheme === 'light' ? styles.modalIngrWrapper : dark.modalIngrWrapper}>
          <Pressable type="submit" style={styles.modalCloseBtn} onPress={ () => setIsModalActive(false) }>
           
          </Pressable>
          <ScrollView>
            {
              ingredientsList.map((item, index) => {
                return (
                  <View style={styles.ingredientsWrapper} key={index}>
                    <Text style={colorScheme === 'light' ? styles.ingredientsText : dark.ingredientsText}>{item.nameIngr}</Text>
                    <View style={styles.ingredientsPriceAdd}>
                      <Text style={[styles.ingredientsPriceText, colorScheme === 'light' ? styles.ingredientsText : dark.ingredientsText]}>{item.priceIngr} ₽</Text>
                      <Pressable style={btnPressed === index ? styles.addIngredientsBtnPressed : styles.addIngredientsBtn} onPress={(e) => {
                        setBtnPressed(index)
                        addIngredients(item)
                        console.log(ingredientsData)
                        console.log(ingredientsPrice)
                          setTimeout(() => {
                            setBtnPressed(null)
                          }, 100)
                      }}>
                        <AddIngredients />
                      </Pressable>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
    
        </View>
      </Modal>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={colorScheme === 'light' ? styles.catalogWrapper : dark.catalogWrapper}>
        {catalogListMap()}
      </ScrollView>
    </>
  );
}
