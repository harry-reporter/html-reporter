import * as React from 'react';
import './SuccessBox.css';
import { IImagesInfo } from '../types';

export default class SuccessBox extends React.Component<IImagesInfo> {
  public render(): JSX.Element {
    return (
      <>
        <div className={`Box-row Box-row--darkgray d-flex flex-justify-center`}>
          <div className={`Expected`}>
            <p className={`Title text-green text-bold`}>Expected</p>
            <img
              onLoad={this.props.onLoad}
              src={this.props.expectedPath}
              alt='Expected Test'
              className='BoxViewAsserts-Img border border-green'
            />
          </div>
        </div>
      </>
    );
  }
}
