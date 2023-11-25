import React, { useState } from 'react';
import { Modal, Platform, Text, View } from 'react-native';
import FormIOS from './FormIOS';
import FormAndroid from './FormAndroid';

const Form = ({
  items,
  countById,
  setSelectedDate,
  totalItems,
  sendOrder,
  totalPrice,
  isModalVisible,
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

  const FormComponent = Platform.OS === 'ios' ? FormIOS : FormAndroid;

  return <FormComponent
  items={items}
  countById={countById}
  totalItems={totalItems}
  sendOrder={sendOrder}
  totalPrice={totalPrice}
  isModalVisible={isModalVisible}
  toggleModal={toggleModal}
  showDate={showDate}
  shortDate={shortDate}
  shortTime={shortTime}
  activeMode={activeMode}
  payValue={payValue}
  setPayValue={setValue}
  orderType={orderType}
  isButtonPressed={isButtonPressed}
  setIsButtonPressed={setIsButtonPressed}
  onToggleSwitch={onToggleSwitch}
  isDatePickerVisible={isDatePickerVisible}
  showDatePicker={showDatePicker}
  hideDatePicker={hideDatePicker}
  handleConfirm={handleConfirm}
  toggleMode={toggleMode}
  pizzasList={pizzasList}
  />
};

export default Form;
