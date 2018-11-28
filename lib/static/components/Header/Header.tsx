import * as React from 'react';
import './Header.scss';
import { IHeaderProps } from '../types';

class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <header className='Header'>
        <h1 className='Header-h1 pl-3 pt-5'>Harry report</h1>

        <div className='Header-TestInfo'>
          <p className='Header-Detail pl-3 text-black'>
            <strong className='Header-TestName'>Total Tests</strong>:
            <span className='Header-TestValue pl-1'>{this.props.total ? this.props.total : 0}</span>
          </p>
          <p className='Header-Detail_color_green pl-3 text-green'>
            <strong className='Header-TestName'>Passed</strong>:
            <span className='Header-TestValue pl-1 '>{this.props.passed ? this.props.passed : 0}</span>
          </p>
          <p className='Header-Detail_color_red pl-3 text-red'>
            <strong className='Header-TestName'>Failed</strong>:
            <span className='Header-TestValue pl-1 text-red'>{this.props.failed ? this.props.failed : 0}</span>
          </p>
          <p className='Header-Detail_color_gray pl-3 text-gray'>
            <strong className='Header-TestName'>Skipped</strong>:
            <span className='Header-TestValue pl-1'>{this.props.skipped ? this.props.skipped : 0}</span>
          </p>
          <p className='Header-Detail_color_yellow  pl-3 text-yellow'>
            <strong className='Header-TestName'>Retries</strong>:
            <span className='Header-TestValue pl-1'>{this.props.retries ? this.props.retries : 0}</span>
          </p>
        </div>
      </header>
    );
  }
}
export default Header;
