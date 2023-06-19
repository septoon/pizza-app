import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTeaCardList } from '../../../../redux/teaCard-reducer';
import teaCardList from '../../../../assets/json/teaCardList';

export default function Tea() {
  // const dispatch = useDispatch()
  // const { teaCardPage } = useSelector(({ state }) => ({
  //   teaCardPage: state.teaCardData
  // }))

  // React.useEffect(() => { 
  //   dispatch(addTeaCardList(teaCardList))
  // }, [dispatch])

  // const cardData = teaCardPage.teaCardData
  const cardDataKeys = Object.keys(teaCardList)

  const teaListMap = () => {
    return cardDataKeys.map((c, index) => {
      return (
        <View style={styles.teaCardWrapper} key={index}>
          {
            teaCardList[c].map((el, index) => (
              <View style={styles.cardItems} key={index} >
                <Text style={styles.teaCardTitle}>{el.header}</Text>
                <View style={styles.cardItem}>
                  <View style={styles.item} >
                    <Text>{el.title}</Text>
                    <Text>{el.description}</Text>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
      );
    });
  };

  return (
    <View style={styles.cartWrapper}>
      { teaListMap() }
    </View>
  );
}

const styles = StyleSheet.create({
  teaCardWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});