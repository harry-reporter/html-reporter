import 'primer-buttons/index.scss';
import * as React from 'react';
import Octicon from '@githubprimer/octicons-react';

import { IButtonsProps } from '../types';

class Buttons extends React.Component<IButtonsProps> {
  public render() {
    return (
      <button className='btn BtnGroup-item btn-sm' type='button' onClick={this.props.onClick}>
        {this.props.title} {this.props.icon ? <Octicon icon={this.props.icon} /> : ''}
      </button>
    );
  }
}
export default Buttons;
