import * as React from 'react';
import cn from 'classnames';

import { TextProps } from './types';

const Text: React.SFC<TextProps> = ({ as: Tag, children, className, textColor, textType }) => {
  const cnText = cn(className, `text-${textType}`, `text-${textColor}`);

  return (
    <Tag className={cnText}>{children}</Tag>
  );
};

Text.defaultProps = {
  textType: 'normal',
  as: 'p',
  textColor: 'gray-dark',
};

export default Text;
