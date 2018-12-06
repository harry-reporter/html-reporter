import * as React from 'react';
import { DropdownProps } from './types';

const Dropdown: React.SFC<DropdownProps> = (props) => {
  const { children = null, className, title, isOpened, ...restProps } = props;

  return (
    <details className={`${className} dropdown details-reset details-overlay d-inline-block`}>
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

Dropdown.defaultProps = {
  isOpened: false,
};

export default Dropdown;
