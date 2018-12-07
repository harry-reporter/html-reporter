import * as React from 'react';

import { ImagesInfo } from '../types';
import './ErrorBox.css';

export default class ErrorBox extends React.Component<ImagesInfo> {
  public render(): JSX.Element {
    const { message, stack } = this.props.reason;
    return (
      <div className='Box flash flash-full flash-error d-flex flex-justify-between'>
        <div className='BoxViewError-Message pr-1'>
          <p className='m-0'>
            <strong className='BoxViewError-MessageText'>message: </strong>
            <span className='BoxViewError-MessageValue'>{message}</span>
          </p>
          <p className='m-0'>
            <strong className='BoxViewError-StackText'>stack: </strong>
          </p>
          <div className='BoxViewError-StackValue ml-5'>
            <p className='m-0'>
              <span className='BoxViewError-StackValue'>{stack}</span>
            </p>
          </div>
        </div>
        <div className='BoxViewError-ImageBox'>
          <img src={this.props.actualPath} alt='Error Test' className='BoxViewError-Img border border-red' />
        </div>
      </div>
    );
  }
}
