import { compose, IClassNameProps } from '@bem-react/core';

import { Buttons as Base } from './Buttons';
import { ButtonTypesCopy } from './_types/Button_types_Copy';

export interface IButtonCopyProps extends IButtonsProps {
  textToCopy: string;
}

export interface IButtonsProps extends IClassNameProps {
  title?: string;
  icon?: any;
  onClick?: () => void;
  types?: 'copy';
  className?: string;
}

export const Buttons = compose(ButtonTypesCopy)(Base);
