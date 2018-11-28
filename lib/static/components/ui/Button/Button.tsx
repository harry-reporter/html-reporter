import * as React from 'react';
import cn from 'classnames';
import 'primer-buttons/build/build.css';

import { ButtonProps } from './types';

const Button: React.SFC<ButtonProps> = ({ children, className, asLink, ...restProps }) => {
  const cnButton = cn(className, { btn: !asLink, 'btn-link': asLink });

  return (
    <button {...restProps} className={cnButton} type={'button'}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  asLink: false,
};

export default Button;
