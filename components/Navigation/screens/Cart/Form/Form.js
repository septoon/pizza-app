import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Text, TextInput, View, useColorScheme } from 'react-native';
import { Formik } from 'formik';
import { RadioButton, Switch } from 'react-native-paper';
import SlideButton from './SlideButton';
import { styles } from './styles/FormStyles';
import { dark } from './styles/FormStylesDark';
import DatePicker from './DatePicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Form = ({
  items,
  countById,
  ordersCount,
  setSelectedDate,
  totalItems,
  sendOrder,
  totalPrice,
  isModalVisible,
  setModalVisible,
  isOrderFinish,
  toggleModal,
  showDate,
  shortDate,
  shortTime,
  setShowDate
}) => {
  const [payValue, setValue] = React.useState('Наличные');
  const [activeMode, setActiveMode] = useState(false);
  const [orderType, setOrderType] = useState('Доставка');
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const onToggleSwitch = () => setShowDate(!showDate);

  const colorScheme = useColorScheme();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const toggleMode = () => {
    activeMode ? setActiveMode(false) : setActiveMode(true);
    activeMode ? setOrderType('Доставка') : setOrderType('Самовывоз');
  };

  const pizzasList = items.map((i) => {
    const count = countById(totalItems, i.id, i.activeSize);
    const value = `${i.title} | ${i.activeSize} | ${i.activePrice} ₽ | x ${count}шт.`;
    return value;
  });

  return (
    <Modal
      presentationStyle="pageSheet"
      isModalInPresentation={true}
      visible={isModalVisible}
      style={styles.modal}
      onSwipeComplete={toggleModal}
      swipeDirection="down"
      animationType="slide"
      onBackdropPress={toggleModal}>
      <View style={colorScheme === 'light' ? styles.emailForm : dark.emailForm}>
        <View style={styles.modalHeader}>
          <Pressable type="submit" style={styles.formBackBtn} onPress={toggleModal}>
            <Text style={styles.formBackBtnText}>Закрыть</Text>
          </Pressable>
          <Text style={styles.modalHeaderText}>Оформление</Text>
          <Text style={styles.unvisibleText}>Закрыть</Text>
        </View>
        <SlideButton colorScheme={colorScheme} toggleMode={toggleMode} orderType={orderType} />
        <View style={styles.emailFormWrapper}>
          <Text style={colorScheme === 'light' ? styles.formTitle : dark.formTitle}>
            Ваш заказ:
          </Text>
          <Formik
            initialValues={{ address: '', phoneNumber: '+7', comment: '' }}
            onSubmit={(values) => sendOrder(orderType, values, pizzasList.toString(), payValue)}
            style={styles.formTotal}>
            {(props) => (
              <>
              <KeyboardAwareScrollView>
                <View
                  style={colorScheme === 'light' ? styles.orderListWrapper : dark.orderListWrapper}>
                  {items.map((i) => {
                    const count = countById(totalItems, i.id, i.activeSize);

                    return (
                      <TextInput
                        key={i.id}
                        style={colorScheme === 'light' ? styles.hiddenInput : dark.hiddenInput}
                        name={i.id}
                        value={`${i.title} | ${i.activeSize} | ${i.activePrice} ₽ | x ${count}шт.`}
                      />
                    );
                  })}
                </View>
                {!activeMode ? (
                  <View style={styles.orderInputsWrapper}>
                    <Text
                      style={colorScheme === 'light' ? styles.formTotalPrice : dark.formTotalPrice}>
                      На сумму: <Text style={styles.formTotalPriceSum}>{totalPrice} ₽</Text>
                    </Text>
                    <View
                      style={colorScheme === 'light' ? styles.showDateToggle : dark.showDateToggle}>
                      <Text
                        style={
                          colorScheme === 'light'
                            ? styles.showDateToggleText
                            : dark.showDateToggleText
                        }>
                        Выбрать время доставки
                      </Text>
                      <Switch value={showDate} color="#2ecb47" onValueChange={onToggleSwitch} />
                    </View>
                    <DatePicker
                      showDate={showDate}
                      colorScheme={colorScheme}
                      showDatePicker={showDatePicker}
                      isDatePickerVisible={isDatePickerVisible}
                      shortDate={shortDate}
                      shortTime={shortTime}
                      handleConfirm={handleConfirm}
                      hideDatePicker={hideDatePicker}
                    />
                    <Text style={colorScheme === 'light' ? styles.formText : dark.formText}>
                      Введите ваш адрес:
                    </Text>
                    <View style={styles.inpValid}>
                      <TextInput
                        required
                        style={colorScheme === 'light' ? styles.orderInput : dark.orderInput}
                        value={props.values.address}
                        onChangeText={props.handleChange('address')}
                        name="address"
                        placeholder="Ул. Горького, 54"
                        placeholderTextColor="#b8b8bb"
                      />
                    </View>
                    <Text style={colorScheme === 'light' ? styles.formText : dark.formText}>
                      Введите ваш номер телефона:
                    </Text>
                    <View style={styles.inpValid}>
                      <TextInput
                        required
                        style={colorScheme === 'light' ? styles.orderInput : dark.orderInput}
                        value={props.values.phoneNumber}
                        onChangeText={props.handleChange('phoneNumber')}
                        placeholder="+7 (978) 704 88 06"
                        placeholderTextColor="#b8b8bb"
                        name="telephone"
                        keyboardType="numeric"
                        maxLength={13}
                      />
                    </View>
                    <Text style={colorScheme === 'light' ? styles.formText : dark.formText}>
                      Добавьте комментарий:
                    </Text>
                    <View style={styles.inpValid}>
                      <TextInput
                        required
                        style={colorScheme === 'light' ? styles.orderInput : dark.orderInput}
                        value={props.values.comment}
                        onChangeText={props.handleChange('comment')}
                        name="comment"
                        placeholder="Например: заезд, номер подъезда..."
                        placeholderTextColor="#b8b8bb"
                      />
                    </View>
                    <Text style={colorScheme === 'light' ? styles.formText : dark.formText}>
                      Спооб оплаты:
                    </Text>
                    <View style={colorScheme === 'light' ? styles.payment : dark.payment} name="checkbox">
                      <RadioButton.Group
                        onValueChange={(newValue) => setValue(newValue)}
                        value={payValue}>
                        <RadioButton.Item style={styles.radioBtnRow} labelStyle={colorScheme === 'dark' ? {color: 'white'} : null} color='orange' label="Наличные" value="Наличные" />
                        <RadioButton.Item style={styles.radioBtnRow} labelStyle={colorScheme === 'dark' ? {color: 'white'} : null} color='orange' label="Карта" value="Карта" />
                      </RadioButton.Group>
                    </View>
                  </View>
                ) : (
                  <View style={styles.orderInputsWrapper}>
                    <Text
                      style={colorScheme === 'light' ? styles.formTotalPrice : dark.formTotalPrice}>
                      На сумму: <Text style={styles.formTotalPriceSum}>{totalPrice} ₽</Text>
                    </Text>
                    <View
                      style={colorScheme === 'light' ? styles.showDateToggle : dark.showDateToggle}>
                      <Text
                        style={
                          colorScheme === 'light'
                            ? styles.showDateToggleText
                            : dark.showDateToggleText
                        }>
                        Выбрать время самовывоза
                      </Text>
                      <Switch value={showDate} color="#2ecb47" onValueChange={onToggleSwitch} />
                    </View>
                    <DatePicker
                      showDate={showDate}
                      colorScheme={colorScheme}
                      showDatePicker={showDatePicker}
                      isDatePickerVisible={isDatePickerVisible}
                      shortDate={shortDate}
                      shortTime={shortTime}
                      handleConfirm={handleConfirm}
                      hideDatePicker={hideDatePicker}
                    />
                    <Text style={colorScheme === 'light' ? styles.formText : dark.formText}>
                      Введите ваш номер телефона:
                    </Text>
                    <View style={styles.inpValid}>
                      <TextInput
                        required
                        style={colorScheme === 'light' ? styles.orderInput : dark.orderInput}
                        value={props.values.phoneNumber}
                        onChangeText={props.handleChange('phoneNumber')}
                        placeholder="+7 (978) 704 88 06"
                        placeholderTextColor="#b8b8bb"
                        name="telephone"
                        keyboardType="numeric"
                        maxLength={13}
                      />
                    </View>
                  </View>
                )}
              </KeyboardAwareScrollView>
            <Pressable style={[styles.btnOrder, isButtonPressed && styles.btnOrderPressed]} onPress={() => {
              props.handleSubmit()
              setIsButtonPressed(true);
              setTimeout(() => {
                setIsButtonPressed(false);
                }, 200)
            }}>
              <Text style={[styles.btnOrderText, isButtonPressed && styles.btnOrderTextPressed]}>Заказать</Text>
            </Pressable>

              </>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

export default Form;
