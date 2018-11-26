import * as React from 'react';
import { ButtonSt } from './styles';

import { ButtonProps } from './types';

const Button: React.SFC<ButtonProps> = (props) => {
  return (
    <ButtonSt {...props}>{props.children}</ButtonSt>
  );
};

export default Button;
