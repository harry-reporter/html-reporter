import * as React from 'react';
import './Header.css';
import './Header.scss';

interface IHeaderProps {
  [key: string]: number;
}

class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <header className='Header'>
        <h1 className='Header-h1 Label pl-3 pt-5'>Harry report</h1>

        <div className='Header-TestInfo'>
          <p className='Header-Detail pl-3 text-black'>
            <strong className='Header-TestName'>Total Tests</strong>:
            <span className='Header-TestValue pl-1'>{this.props.total}</span>
          </p>
          <p className='Header-Detail_color_green pl-3 text-green'>
            <strong className='Header-TestName'>Passed</strong>:
            <span className='Header-TestValue pl-1 '>{this.props.passed}</span>
          </p>
          <p className='Header-Detail_color_red pl-3 text-red'>
            <strong className='Header-TestName'>Failed</strong>:
            <span className='Header-TestValue Label pl-1 text-red'>15</span>
          </p>
          <p className='Header-Detail_color_gray pl-3 text-gray'>
            <strong className='Header-TestName'>Skipped</strong>:
            <span className='Header-TestValue pl-1'>{this.props.skipped}</span>
          </p>
          <p className='Header-Detail_color_yellow  pl-3 text-yellow'>
            <strong className='Header-TestName'>Retries</strong>:
            <span className='Header-TestValue pl-1'>{this.props.retries}</span>
          </p>
        </div>
      </header>
    );
  }
}
export default Header;
