import 'primer-buttons/index.scss';
import * as React from 'react';
import Buttons from '../Buttons/Buttons';

import { IButtonsGroupProps } from '../types';

class ButtonsGroup extends React.Component<IButtonsGroupProps> {
  public render() {
    return (
      <React.Fragment>
        <div className='BtnGroup'>
          {this.props.btns.map((btn, index) => (
            <Buttons title={btn.title} icon={btn.icon} onClick={btn.onClick} key={index} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ButtonsGroup;
