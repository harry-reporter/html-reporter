import * as React from 'react';

import { IImagesInfo } from '../types';
import './FailBox.css';

export default class FailBox extends React.Component<IImagesInfo> {
  public render(): JSX.Element {
    return (
      <>
        <div className={`Box-row Box-row--darkgray d-flex flex-justify-center`}>
          <div className={`Expected`}>
            <p className={`Title text-green text-bold`}>Expected</p>
            <img src={this.props.expectedPath} alt='Expected Test' className='BoxViewAsserts-Img border border-green' />
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
      </>
    );
  }
}
