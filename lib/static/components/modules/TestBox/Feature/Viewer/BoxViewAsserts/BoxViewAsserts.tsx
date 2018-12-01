import * as React from 'react';

import { classnames, cn } from '@bem-react/classname';

import './BoxViewAsserts.css';
import { IViewAssertsProps } from './types';
import Link from 'src/components/ui/Link/Link';

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

        <div className={`Box-detail${this.state.isOpen ? '' : '_isHidden'}`}>
          <div className={`Box-row Box-row--darkgray d-flex flex-justify-center`}>
            <div className={`Expected`}>
              <p className={`Title text-green text-bold`}>Expected</p>
              <img
                src={this.props.expectedPath}
                alt='Expected Test'
                className='BoxViewAsserts-Img border border-green'
              />
            </div>
            <div className={`Actual `}>
              <p className={`Title text-red text-bold`}>Actual</p>
              <img src={this.props.actualPath} alt='Expected Test' className='BoxViewAsserts-Img border border-red' />
            </div>
            <div className={`Diff `}>
              <p className={`Title text-gray text-bold`}>Diff</p>
              <img src={this.props.diffPath} alt='Expected Test' className='BoxViewAsserts-Img border border-gray' />
            </div>
          </div>
          <div className={`Box-footer Box-row--gray p-0`}>
            <div className='tabnav m-0'>
              <nav className='UnderlineNav' aria-label='Foo bar'>
                <div className='UnderlineNav-body'>
                  <a href='#url' className='UnderlineNav-item selected'>
                    2-up
                  </a>
                  <a href='#url' className='UnderlineNav-item'>
                    Only Diff
                  </a>
                  <a href='#url' className='UnderlineNav-item'>
                    Loupe
                  </a>
                  <a href='#url' className='UnderlineNav-item'>
                    Swipe
                  </a>
                  <a href='#url' className='UnderlineNav-item'>
                    Onion Skin
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
  public onLinkClick = (e) => {
    e.preventDefault();
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }
}
