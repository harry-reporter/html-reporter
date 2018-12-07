import * as React from 'react';
import cn from 'classnames';

import Controls from '../Controls';
import Status from '../Status';
import { withPadding } from 'src/components/hoc/withPadding';

import { IHeaderProps } from './types';

export default class Header extends React.PureComponent<IHeaderProps> {
  public handleClickAtHeader = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onToggle();
    }
  }

  public cnHeader = cn(this.props.className, 'Box-row--gray d-flex flex-justify-between flex-items-center px-3 py-2');

  public render() {
    const statusProps = {
      data: this.props.data,
      title: this.props.title,
      status: this.props.status,
      onClickAtTitle: this.handleClickAtHeader,
      handleDataChange: this.props.handleDataChange,
      pageCurrent: this.props.pageCurrent,
      pageCount: this.props.pageCount,
    };
    const controlsProps = {
      data: this.props.data,
      isOpenedFeature: this.props.isOpenedFeature,
      onToggle: this.props.onToggle,
      handleViewChange: this.props.handleViewChange,
      viewType: this.props.viewType,
    };
    return (
      <div className={this.cnHeader} onClick={this.handleClickAtHeader}>
        <Status {...statusProps} />
        <Controls {...controlsProps} />
      </div>
    );
  }
}
