import * as React from 'react';
import cn from 'classnames';

import Controls from '../Controls';
import Status from '../Status';
import { withPadding } from 'src/components/hoc/withPadding';

import { TestStatus } from 'src/components/types';

interface HeaderProps {
  data: any;
  status: TestStatus;
  title: string;
  className?: string;
  isOpenedFeature: boolean;

  onToggle: () => any;
}

const Header: React.SFC<HeaderProps> = (props) => {
  const { className, status, title, isOpenedFeature, data } = props;

  const cnHeader = cn(className, 'd-flex flex-justify-between flex-items-center');

  return (
    <div className={cnHeader}>
      <Status data={data} title={title} status={status} />
      <Controls data={data} isOpenedFeature={isOpenedFeature} onToggle={props.onToggle} />
    </div>
  );
};

export default withPadding<HeaderProps>(Header);
