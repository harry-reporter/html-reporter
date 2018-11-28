import * as React from 'react';
import { withPadding } from 'src/components/hoc/withPadding';

interface HeaderProps {
  className?: string;
  title?: string;
}

const Header: React.SFC<HeaderProps> = ({ children, className }) => {
  return (
    <header className={className}>{children}</header>
  );
};

export default withPadding<HeaderProps>(Header);
