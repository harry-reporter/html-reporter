import Octicon, { ChevronDown, ChevronUp, Clippy } from '@githubprimer/octicons-react';

import 'primer-box/index.scss';
import * as React from 'react';
import './AccordeonMain.css';
import ButtonCopy from '../ButtonCopy/ButtonCopy';

interface IAccordeonProps {
  title: string;
  type?: 'success' | 'failed';
}

interface IAccordeonState {
  isOpen: boolean;
}

class AccordeonMain extends React.Component<IAccordeonProps, IAccordeonState> {
  constructor(props: IAccordeonProps) {
    super(props);
    this.state = { isOpen: true };
    this.toggle = this.toggle.bind(this);
    //this.textHeader = React.createRef();
    this.setTextHeader = this.setTextHeader.bind(this);
  }
  public isIconOpen(open: any) {
    return open ? ChevronUp : ChevronDown;
  }
  public toggle() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }
  public setTextHeader() {}

  public render() {
    return (
      <React.Fragment>
        <div className='Accorderon m-3 mt-4'>
          <div className='Accorderon-Box Box Box--condensed'>
            <div className='Accorderon-Header Box-row d-flex flex-items-center flex-justify-between m-1'>
              <h3 className={`Accorderon-Title Box-title text-${this.props.type == 'success' ? 'green' : 'red'}`}>
                {this.props.title}
              </h3>

              <div className='Accordeon-Controls d-flex flex-items-center flex-justify-end text-grey'>
                <ButtonCopy textToCopy={this.props.title} />
                <div onClick={this.toggle} className='Box-summary pl-3 text-gray'>
                  <Octicon icon={this.state.isOpen ? ChevronUp : ChevronDown} />
                </div>
              </div>
            </div>
            <div className={`Box-detail${this.state.isOpen ? '' : '_isHidden'}`}>{this.props.children}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccordeonMain;
