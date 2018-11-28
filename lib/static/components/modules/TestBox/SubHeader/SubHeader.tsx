import * as React from 'react';

interface SubHeaderProps {}

const SubHeader: React.SFC<SubHeaderProps> = ({ children }) => {
  return (
    <div className={'Box-subheader Box-row'}>{children}</div>
  );
};

export default SubHeader;
