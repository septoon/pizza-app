import { useRef } from 'react';
import { TextInput } from 'react-native';

const Mask = () => {
  const inputRef = useRef(null);

  const setCursorPosition = (pos, elem) => {
    elem.focus();
    elem.setNativeProps({ selection: { start: pos, end: pos } });
  };

  const createMask = (event) => {
    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = event.nativeEvent.text.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    inputRef.current.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (inputRef.current.value.length === 2) {
        inputRef.current.value = '';
      }
    } else {
      setCursorPosition(inputRef.current.value.length, inputRef.current);
    }
  };

  return (
    <TextInput
      ref={inputRef}
      onChange={createMask}
      onFocus={createMask}
      onBlur={createMask}
    />
  );
};

export default Mask;
