import Octicon, { ChevronDown, ChevronUp, Clippy } from '@githubprimer/octicons-react';

import * as React from 'react';
import './AccordeonMain.css';
import { Buttons } from '../Buttons';
import { IAccordeonProps, IAccordeonState } from '../types';

class AccordeonMain extends React.Component<IAccordeonProps, IAccordeonState> {
  constructor(props: IAccordeonProps) {
    super(props);
    this.state = { isOpen: true };
  }
  public isIconOpen(open: any) {
    return open ? ChevronUp : ChevronDown;
  }
  public toggle = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  // todo: подключить state redux для заголовка
  // public setTextHeader = () => {}

  public render() {
    return (
      <div className='Accorderon m-3 mt-4'>
        <div className='Accorderon-Box Box Box--condensed'>
          <div className='Accorderon-Header Box-row d-flex flex-items-center flex-justify-between m-1'>
            <h2 className={`Accorderon-Title Box-title text-${this.props.status === 'success' ? 'green' : 'red'}`}>
              {this.props.title}
            </h2>

            <div className='Accordeon-Controls d-flex flex-items-center flex-justify-end text-grey'>
              <Buttons className={'Buttons'} textToCopy={this.props.title} types='copy' />
              <div onClick={this.toggle} className='Box-summary pl-3 text-gray'>
                <Octicon icon={this.state.isOpen ? ChevronUp : ChevronDown} />
              </div>
            </div>
          </div>
          <div className={`Box-detail${this.state.isOpen ? '' : '_isHidden'}`}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default AccordeonMain;
