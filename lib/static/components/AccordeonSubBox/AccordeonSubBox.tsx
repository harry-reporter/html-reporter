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
    actualPath: 'images/c49276d/plain/chrome~current_6.png',
    diffPath: 'images/c49276d/plain/chrome~diff_6.png',
    expectedPath: 'images/c49276d/plain/chrome~ref_6.png',
    refImagePath: '/images/screens/c49276d/firefox/plain.png',
    stateName: 'plain',
    status: 'error',
    reason: {
      message: 'can not find reference image at /images/c49276d/firefox/testName.png for "testName" state',
      stack:
        'NoRefImageError: can not find reference image at /images/c49276d/firefox/testName.png for "testName" state\n    at Function.fromObject (/Users/olga/Documents/ШРИ/Домашние работы/lesson5/node_modules/hermione/lib/browser/commands/assert-view/errors/no-ref-image-error.js:7:16)\n    at AssertViewResults.create.results.map (/Users/olga/Documents/ШРИ/Домашние работы/lesson5/node_modules/hermione/lib/browser/commands/assert-view/assert-view-results.js:10:73)\n    at Array.map (<anonymous>)\n    at Function.fromRawObject (/Users/olga/Documents/ШРИ/Домашние работы/lesson5/node_modules/hermione/lib/browser/commands/assert-view/assert-view-results.js:8:49)\n    at RegularTestRunner._applyTestResults (/Users/olga/Documents/ШРИ/Домашние работы/lesson5/node_modules/hermione/lib/runner/test-runner/regular-test-runner.js:60:59)\n    at RegularTestRunner.run (/Users/olga/Documents/ШРИ/Домашние работы/lesson5/node_modules/hermione/lib/runner/test-runner/regular-test-runner.js:30:18)',
    },
  };
  public testDiffImages: IViewAssertsProps = {
    stateName: 'plain',
    refImagePath: '/images/screens/c49276d/firefox/plain.png',
    status: 'fail',
    actualPath: 'images/c49276d/plain/firefox~current_6.png',
    expectedPath: 'images/c49276d/plain/firefox~ref_6.png',
    diffPath: 'images/c49276d/plain/firefox~diff_6.png',
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

  public testMessage = this.testImage.reason.message;
  public testStack = this.testImage.reason.stack;
  public testImageUrl = this.testImage.refImagePath;

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
          <BoxViewError
            className='testError'
            message={this.testMessage}
            stack={this.testStack}
            image={this.testImageUrl}
          />

          <BoxViewAsserts
            className='view'
            imageInfo={this.testDiffImages}
            stateName={this.testDiffImages.stateName}
            status={this.testDiffImages.status}
            refImagePath={this.testDiffImages.refImagePath}
            expectedPath={this.testDiffImages.expectedPath}
            diffPath={this.testDiffImages.diffPath}
            actualPath={this.testDiffImages.actualPath}
          />

          <BoxView className='code' types='code' />
          <BoxView className='files' types='files' />
        </div>
      </>
    );
  }
}

export default AccordeonSubBox;
