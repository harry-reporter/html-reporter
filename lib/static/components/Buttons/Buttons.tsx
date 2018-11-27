import 'primer-buttons/index.scss';
import * as React from 'react';
import Octicon from '@githubprimer/octicons-react';

export interface IButtonsProps {
  title: string;
  icon?: any;
  onClick?: () => void;
}

class Buttons extends React.Component<IButtonsProps> {
  public render() {
    return (
      <React.Fragment>
        <button className='btn BtnGroup-item btn-sm' type='button' onClick={this.props.onClick}>
          {this.props.title} {this.props.icon ? <Octicon icon={this.props.icon} /> : ''}
        </button>
      </React.Fragment>
    );
  }
}
export default Buttons;
