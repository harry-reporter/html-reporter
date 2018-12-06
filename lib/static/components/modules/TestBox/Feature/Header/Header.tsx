import * as React from 'react';
import cn from 'classnames';

import Controls from '../Controls';
import Status from '../Status';
import { withPadding } from 'src/components/hoc/withPadding';

import { HeaderProps } from './types';

const Header: React.SFC<HeaderProps> = (props) => {
  const { className, status, title, isOpenedFeature, data } = props;

  const cnHeader = cn(className, 'Box-row--gray d-flex flex-justify-between flex-items-center px-3 py-2');

  return (
    <div className={cnHeader}>
      <Status data={data} title={title} status={status} />
      <Controls data={data} isOpenedFeature={isOpenedFeature} onToggle={props.onToggle} />
    </div>
  );
};

export default withPadding<HeaderProps>(Header);
