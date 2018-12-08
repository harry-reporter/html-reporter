import * as React from 'react';
import { TextInputProps } from './types';

const TextInput: React.SFC<TextInputProps> = (props) => {
  const { className, placeholred, onChange, ...restProps } = props;

  return (
    <input
      className={`${className} form-control`}
      type='text'
      placeholder={placeholred}
      onChange={onChange}
    />
  );
};

export default TextInput;
