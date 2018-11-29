import Octicon, * as octiconsReact from '@githubprimer/octicons-react';

import 'primer-box/index.scss';
import * as React from 'react';
import './AccordeonSubBox.css';
import Pagination from '../Pagination/Pagination';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import Buttons from '../Buttons/Buttons';
import BoxViewError from '../BoxViewError/BoxViewError';
import { IAccordeonProps, IAccordeonState } from '../types';
import ScreenshotViewer from '../BoxViewAsserts/BoxViewAsserts';
import { IViewAssertsProps } from '../BoxViewAsserts/types';

class AccordeonSubBox extends React.Component<IAccordeonProps, IAccordeonState> {
  public test: IViewAssertsProps = {
    expectedPath: 'images/c49276d/plain/chrome~ref_6.png',
    refImagePath: '/Users/olga/Documents/ШРИ/Домашние работы/lesson5/hermione/screens/c49276d/chrome/plain.png',
    stateName: 'plain',
    status: 'fail',
  };

  public btns = [
    { title: '', icon: octiconsReact.Code },
    { title: '', icon: octiconsReact.ListUnordered },
    { title: '', icon: octiconsReact.File },
  ];

  constructor(props: IAccordeonProps) {
    super(props);
    this.state = { isOpen: true };
    this.toggle = this.toggle.bind(this);
  }
  public isIconOpen(open: any) {
    return open ? octiconsReact.ChevronUp : octiconsReact.ChevronDown;
  }
  public toggle() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  public getTextColor() {
    return this.props.status === 'success' ? 'green' : this.props.status === 'fail' ? 'red' : 'gray';
  }

  public render() {
    return (
      <>
        <div className='AccordeonSubBox Box-header d-flex flex-justify-between'>
          <div className={`header d-flex flex-items-center text-${this.getTextColor()} pl-1`}>
            <div className='Box-btn-octicon'>
              <Octicon icon={this.props.status === 'success' ? octiconsReact.Check : octiconsReact.X} />
            </div>
            <h4 className='Box-title pl-2 Subhead-heading'>{this.props.title}</h4>
            <Pagination pages={9} />
          </div>

          <div className='Accordeon-Controls d-flex flex-items-center flex-justify-end text-grey'>
            <div className='Box-GroupTestView pr-2'>
              <ButtonsGroup btns={this.btns} />
            </div>
            <div className='Box-GroupTestControls pr-2'>
              <ButtonsGroup btns={[{ title: 'Skip' }, { title: 'Accept' }]} />
            </div>
            <div className='Box-View pr-1'>
              <Buttons title={'View'} />
            </div>
            <div className='Box-Eye text-gray pl-3'>
              <Octicon icon={octiconsReact.Eye} />
            </div>
            <div onClick={this.toggle} className='Box-summary text-gray pr-1 pl-3'>
              <Octicon icon={this.state.isOpen ? octiconsReact.ChevronUp : octiconsReact.ChevronDown} />
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
          <ScreenshotViewer imagesInfo={[this.test]} />
        </div>
      </>
    );
  }
}

export default AccordeonSubBox;
