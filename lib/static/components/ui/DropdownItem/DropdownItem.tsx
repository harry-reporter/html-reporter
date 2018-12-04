import * as React from 'react';
// import cn from 'classnames';

import { DropdownItemProps } from './types';
// import 'primer-buttons/build/build.css';
// import 'primer-support';

const DropdownItem: React.SFC<DropdownItemProps> = (props) => {
  const { className, title, url, ...restProps } = props;

  return (
    <li><a className='dropdown-item' href={url}>{title}</a></li>
  );
};

export default DropdownItem;
