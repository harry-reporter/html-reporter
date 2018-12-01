import * as React from 'react';
import Octicon from '@githubprimer/octicons-react';

import { IButtonsProps } from './index';
import { classnames, cn } from '@bem-react/classname';

export const Buttons: React.SFC<IButtonsProps> = ({ className, onClick, title, icon }) => {
  return (
    <button className={classnames(cn('btn')(), className)} type='button' onClick={onClick}>
      {title} {icon ? <Octicon icon={icon} /> : ''}
    </button>
  );
};
