import Octicon, {
  Check,
  ChevronDown,
  ChevronUp,
  X,
  Code,
  ListUnordered,
  File,
  Eye,
} from '@githubprimer/octicons-react';

import 'primer-box/index.scss';
import * as React from 'react';
import './AccordeonSubBox.css';
import Pagination from '../Pagination/Pagination';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import Buttons from '../Buttons/Buttons';
import BoxViewError from '../BoxViewError/BoxViewError';
import { IAccordeonProps, IAccordeonState } from '../types';

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
        <div className='AccordeonSubBox Box-header d-flex flex-justify-between'>
          <div
            className={`header d-flex flex-items-center text-${
              this.props.status === 'success' ? 'green' : this.props.status === 'fail' ? 'red' : 'gray'
            } pl-1`}
          >
            <div className='Box-btn-octicon'>
              <Octicon icon={this.props.status == 'success' ? Check : X} />
            </div>
            <h4 className='Box-title pl-2 Subhead-heading'>{this.props.title}</h4>
            <Pagination pages={9} />
          </div>

          <div className='Accordeon-Controls d-flex flex-items-center flex-justify-end text-grey'>
            <div className='Box-GroupTestView pr-2'>
              <ButtonsGroup
                btns={[{ title: '', icon: Code }, { title: '', icon: ListUnordered }, { title: '', icon: File }]}
              />
            </div>
            <div className='Box-GroupTestControls pr-2'>
              <ButtonsGroup btns={[{ title: 'Skip' }, { title: 'Accept' }]} />
            </div>
            <div className='Box-View pr-1'>
              <Buttons title={'View'} />
            </div>
            <div className='Box-Eye text-gray pl-3'>
              <Octicon icon={Eye} />
            </div>
            <div onClick={this.toggle} className='Box-summary text-gray pr-1 pl-3'>
              <Octicon icon={this.state.isOpen ? ChevronUp : ChevronDown} />
            </div>
          </div>
        </div>
        <div className={`Box-body${this.state.isOpen ? '' : '_isHidden'} p-0`}>
          {this.props.children}
          <BoxViewError
            message={'AssertionError: не сработал счетчик'}
            stack={'at assertCountersd - checkCounter2.js:47:20'}
            image={'./images/chrome-desktop_current_7.png'}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default AccordeonSubBox;
