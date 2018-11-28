import * as React from 'react';

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = ({ children }) => {
  return (
    <div className={'Box-header'}>{children}</div>
  );
};

export default Header;
