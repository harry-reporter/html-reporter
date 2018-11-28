import './BoxViewError.scss';

import * as React from 'react';
import { IBoxViewErrorProps, IBoxViewState } from '../types';

class BoxViewError extends React.Component<IBoxViewErrorProps, IBoxViewState> {
  public render() {
    return (
      <div className='BoxViewError flash flash-full flash-error d-flex flex-justify-between'>
        <div className='BoxViewError-Message'>
          <p className='m-0'>
            <strong className='BoxViewError-MessageText'>message: </strong>
            <span className='BoxViewError-MessageValue'>{this.props.message}</span>
          </p>
          <p className='m-0'>
            <strong className='BoxViewError-StackText'>stack: </strong>
          </p>
          <div className='BoxViewError-StackValue ml-5'>
            <p className='m-0'>
              <span className='BoxViewError-StackValue'>{this.props.stack}</span>
            </p>
          </div>
        </div>
        <div className='BoxViewError-image'>
          <img src={this.props.image} alt='Image Error Test' className='border border-red' />
        </div>
      </div>
    );
  }
}
export default BoxViewError;
