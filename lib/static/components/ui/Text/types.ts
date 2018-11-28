import { ColorType } from '../types';

export interface TextProps {
  className?: string;
  as?: 'p' | 'span';
  textType?: 'normal' | 'italic' | 'bold';
  textColor?: ColorType;
}
