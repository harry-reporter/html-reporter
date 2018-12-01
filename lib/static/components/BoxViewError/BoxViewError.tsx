import './BoxViewError.css';

import * as React from 'react';
import { IBoxView } from '../BoxView/types';
import { cn } from '@bem-react/classname';

export default class BoxViewError extends React.Component<IBoxView> {
  public cnBVE = cn(this.props.className);
  public render() {
    return (
      <div className={this.cnBVE('Box', ['flash', 'flash-full flash-error d-flex flex-justify-between'])}>
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
        <div className='BoxViewError-ImageBox'>
          <img src={this.props.image} alt='ImageBox-Image Error Test' className='border border-red' />
        </div>
      </div>
    );
  }
}
