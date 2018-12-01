import * as React from 'react';
import './Header2.css';
import { IHeaderProps } from '../types';

class Header extends React.Component<IHeaderProps> {
  public renderHeaderDetail(testName: string, testValue: any, color: string) {
    return (
      <p className={`Header-Detail text-${color}`}>
        <strong className='Header-TestName pl-3'>{testName}</strong>:
        <span className='Header-TestValue pl-1'>{testValue ? testValue : 0}</span>
      </p>
    );
  }
  public render() {
    return (
      <header className='Header'>
        <h1 className='Header-h1 pl-3 pt-5'>Harry report</h1>
        <div className='Header-TestInfo'>
          {this.renderHeaderDetail('Total Tests', this.props.total, 'black')}
          {this.renderHeaderDetail('Passed', this.props.passed, 'green')}
          {this.renderHeaderDetail('Failed', this.props.failed, 'red')}
          {this.renderHeaderDetail('Skipped', this.props.skipped, 'gray')}
          {this.renderHeaderDetail('Retries', this.props.retries, 'yellow')}
        </div>
      </header>
    );
  }
}
export default Header;
