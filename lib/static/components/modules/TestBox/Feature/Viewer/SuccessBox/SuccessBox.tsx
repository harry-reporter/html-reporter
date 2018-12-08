import * as React from 'react';
import './SuccessBox.css';
import { ImagesInfo } from '../types';

export default class SuccessBox extends React.Component<ImagesInfo> {
  public render(): JSX.Element {
    const { onLoad, expectedPath } = this.props;
    return (
      <>
        <div className={`Box-row Box-row--darkgray d-flex flex-justify-center`}>
          <div className={`Expected`}>
            <p className={`Title text-green text-bold`}>Expected</p>
            <img
              onLoad={onLoad}
              src={expectedPath}
              alt='Expected Test'
              className='BoxViewAsserts-Img border border-green'
            />
          </div>
        </div>
      </>
    );
  }
}
