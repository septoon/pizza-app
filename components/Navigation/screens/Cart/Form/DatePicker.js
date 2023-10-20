import React from 'react';
import { Pressable, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles } from './styles/FormStyles';
import { dark } from './styles/FormStylesDark';

const DatePicker = ({
  showDate,
  colorScheme,
  showDatePicker,
  shortDate,
  shortTime,
  isDatePickerVisible,
  handleConfirm,
  hideDatePicker,
}) => {
  return (
    <>
      {showDate ? (
        <View style={colorScheme === 'light' ? styles.showDatePicker : dark.showDatePicker}>
          <Text
            style={colorScheme === 'light' ? styles.showDateToggleText : dark.showDateToggleText}>
            Время:
          </Text>
          <View style={styles.showDateBtnWrapper}>
            <Pressable
              onPress={showDatePicker}
              style={colorScheme === 'light' ? styles.datePickerWrapper : dark.datePickerWrapper}>
              <Text style={colorScheme === 'light' ? styles.showDateBtnText : dark.showDateBtnText}>
                {shortDate}
              </Text>
            </Pressable>
            <Pressable
              onPress={showDatePicker}
              style={colorScheme === 'light' ? styles.datePickerWrapper : dark.datePickerWrapper}>
              <Text style={colorScheme === 'light' ? styles.showDateBtnText : dark.showDateBtnText}>
                {shortTime}
              </Text>
            </Pressable>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            display="inline"
            mode="datetime"
            date={new Date()}
            cancelTextIOS="Отменить"
            confirmTextIOS="Подтвердить"
            locale="ru_RU"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default DatePicker;
