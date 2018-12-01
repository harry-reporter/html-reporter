import * as React from 'react';

import { classnames, cn } from '@bem-react/classname';
import Link from 'src/components/Link/Link';

import './BoxViewAsserts.css';
import { IViewAssertsProps } from './types';

interface IBoxViewAssertState {
  isOpen: boolean;
}

export default class BoxViewAsserts extends React.Component<IViewAssertsProps, IBoxViewAssertState> {
  public cnBVA = cn(this.props.className);
  constructor(props: IViewAssertsProps) {
    super(props);
    this.state = { isOpen: true };
  }
  public getColor() {
    const status = this.props.imageInfo.status;
    return status === 'success' ? 'green' : status === 'fail' ? 'red' : 'gray';
  }

  public render() {
    return (
      <>
        <div
          className={this.cnBVA('Box', ['Box-row', 'Box--condensed', 'Box-header', 'd-flex', 'flex-justify-between'])}
        >
          <h4 className={this.cnBVA('Title', ['Box-title', `text-${this.getColor()}`])}>
            {this.props.imageInfo.stateName}
          </h4>
          <Link className={this.cnBVA('Link', ['flex-justify-end'])} url='' onClick={this.onLinkClick}>
            {this.state.isOpen ? 'Hide' : 'Show'}
          </Link>
        </div>

        <div className={`Box-detail${this.state.isOpen ? '' : '_isHidden'}`}>{this.props.children}</div>
      </>
    );
  }
  public onLinkClick = (e) => {
    e.preventDefault();
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }
}
