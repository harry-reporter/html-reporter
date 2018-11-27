import Octicon, { Check, ChevronDown, ChevronUp, X } from '@githubprimer/octicons-react';

import 'primer-box/index.scss';
import * as React from 'react';
import './AccordeonSubBox.css';
import Pagination from '../Pagination/Pagination';

interface IAccordeonProps {
  title: string;
  type?: 'success' | 'failed';
}

interface IAccordeonState {
  isOpen: boolean;
}

class AccordeonSubBox extends React.Component<IAccordeonProps, IAccordeonState> {
  constructor(props: IAccordeonProps) {
    super(props);
    this.state = { isOpen: true };
    this.toggle = this.toggle.bind(this);
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

  public render() {
    return (
      <React.Fragment>
        <div className='Box-header d-flex flex-justify-between'>
          <div
            className={`header d-flex flex-items-center text-${this.props.type == 'success' ? 'green' : 'red'} pl-1`}
          >
            <div className='Box-btn-octicon'>
              <Octicon icon={this.props.type == 'success' ? Check : X} />
            </div>
            <h4 className='Box-title pl-2 Subhead-heading'>{this.props.title}</h4>
            <Pagination />
          </div>

          <div onClick={this.toggle} className='Box-summary text-gray pr-1'>
            <Octicon icon={this.state.isOpen ? ChevronUp : ChevronDown} />
          </div>
        </div>
        <div className={`Box-body${this.state.isOpen ? '' : '_isHidden'}`}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default AccordeonSubBox;
