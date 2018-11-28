import 'primer-buttons/index.scss';
import * as React from 'react';
import Buttons, { IButtonsProps } from '../Buttons/Buttons';

interface IButtonsGroupProps {
  btns: IButtonsProps[];
}

class ButtonsGroup extends React.Component<IButtonsGroupProps> {
  public render() {
    return (
      <React.Fragment>
        <div className='BtnGroup'>
          {this.props.btns.map((btn) => (
            <Buttons title={btn.title} icon={btn.icon} onClick={btn.onClick} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ButtonsGroup;
