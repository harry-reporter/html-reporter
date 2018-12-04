import * as React from 'react';

import { IImagesInfo } from '../types';

export default class SuccessBox extends React.Component<IImagesInfo> {
  public render(): JSX.Element {
    return (
      <>
        <div className={`Box-row Box-row--darkgray d-flex flex-justify-center`}>
          <div className={`Expected`}>
            <p className={`Title text-green text-bold`}>Expected</p>
            <img src={this.props.expectedPath} alt='Expected Test' className='BoxViewAsserts-Img border border-green' />
          </div>
        </div>
      </>
    );
  }
}
