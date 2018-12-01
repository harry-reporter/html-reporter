import Octicon, * as octiconsReact from '@githubprimer/octicons-react';

import * as React from 'react';
import './AccordeonSubBox.css';
import Pagination from '../Pagination/Pagination';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import { Buttons } from '../Buttons/Buttons';

import { IAccordeonProps, IAccordeonState } from '../types';

import BoxViewAsserts from '../BoxViewAsserts/BoxViewAsserts';
import BoxViewError from '../BoxViewError/BoxViewError';
import { BoxView } from '../BoxView/BoxView';
import { IViewAssertsProps } from '../BoxViewAsserts/types';

class AccordeonSubBox extends React.Component<IAccordeonProps, IAccordeonState> {
  public testImage: IViewAssertsProps = {
    actualPath: 'images/0d7494d/plain/chrome~current_0.png',
    diffPath: 'images/0d7494d/plain/chrome~diff_0.png',
    expectedPath: 'images/c49276d/plain/chrome~ref_6.png',
    refImagePath: './hermione/screens/c49276d/chrome/plain.png',
    stateName: 'lang-popup',
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
            <h3 className='Box-title pl-2 Subhead-heading'>{this.props.title}</h3>
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
              <Buttons title={'View'} className='btn-sm' />
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
          <BoxView className='test' />
          <BoxViewError className='testError' message='test' stack='stackProps' />
          <BoxViewAsserts
            className='view'
            imageInfo={this.testImage}
            stateName={this.testImage.stateName}
            status={this.testImage.status}
            refImagePath={this.testImage.refImagePath}
            expectedPath={this.testImage.expectedPath}
          />
          <BoxView className='code' types='code' />
          <BoxView className='files' types='files' />
        </div>
      </>
    );
  }
}

export default AccordeonSubBox;
