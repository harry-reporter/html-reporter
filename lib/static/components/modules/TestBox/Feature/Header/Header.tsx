import * as React from 'react';
import cn from 'classnames';

import Controls from '../Controls';
import Status from '../Status';
import { withPadding } from 'src/components/hoc/withPadding';

import { HeaderProps } from './types';

interface HeaderState {}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  public handleClickAtHeader = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onToggle();
    }
  }
  public render(): JSX.Element {
    const { className, status, title, isOpenedFeature, data } = this.props;
    const cnHeader = cn(className, 'Box-row--gray d-flex flex-justify-between flex-items-center px-3 py-2');

    return (
      <div
        className={cnHeader}
        onClick={this.handleClickAtHeader}
      >
        <Status
          data={data}
          title={title}
          status={status}
          onClickAtTitle={this.handleClickAtHeader}
        />
        <Controls
          data={data}
          isOpenedFeature={isOpenedFeature}
          onToggle={this.props.onToggle}
        />
      </div>
    );
  }
}

export default withPadding<HeaderProps>(Header);
