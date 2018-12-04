import * as React from 'react';
// import cn from 'classnames';

import { DropdownProps } from './types';
// import 'primer-buttons/build/build.css';
// import 'primer-support';

const Dropdown: React.SFC<DropdownProps> = (props) => {
  const { children = null, className, title, isOpened, ...restProps } = props;

  return (
    <details className='dropdown details-reset details-overlay d-inline-block'>
      <summary className='btn' aria-haspopup='true'>
        {title}
        <div className='dropdown-caret' />
      </summary>

      <ul className='dropdown-menu dropdown-menu-se'>
        {props.children}
      </ul>
    </details>
  );
};

{/* <li><a className='dropdown-item' href='#url'>Dropdown item</a></li> */}
Dropdown.defaultProps = {
  isOpened: false,
};

export default Dropdown;
