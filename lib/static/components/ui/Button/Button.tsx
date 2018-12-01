import * as React from 'react';
import cn from 'classnames';

import Octicon from '@githubprimer/octicons-react';

import { ButtonProps } from './types';
import 'primer-buttons/build/build.css';

const Button: React.SFC<ButtonProps> = ({ children = null, icon, className, title, asLink, ...restProps }) => {
  const cnButton = cn(className, { btn: !asLink, 'btn-link': asLink });

  return (
    <button {...restProps} className={cnButton} type={'button'}>
      {title || children} {icon ? <Octicon icon={icon} /> : null}
    </button>
  );
};

Button.defaultProps = {
  asLink: false,
};

export default Button;
