import * as React from 'react';

import { IImagesInfo } from '../types';
import './FailBox.css';

interface IFailBoxState {
  tabId: number;
}

export default class FailBox extends React.Component<IImagesInfo, IFailBoxState> {
  public state = {
    tabId: 0,
  };
  public getBoxContent() {
    return (
      <>
        {this.getBoxItem('Expected', 'green', this.props.expectedPath)}
        {this.getBoxItem('Actual', 'red', this.props.actualPath)}
        {this.getBoxItem('Diff', 'gray', this.props.diffPath)}
      </>
    );
  }
  public getBoxItem(cn: string, color: string, imgPath: string) {
    return (
      <div className={cn}>
        <p className={`Title text-${color} text-bold`}>Expected</p>
        <img src={imgPath} alt={`${cn} Test`} className={`FailBox-Img border border-${color}`} />
      </div>
    );
  }
  // todo: добавить selected по state.tabId
  public getViewModItem(textItems: string[]) {
    const { tabId } = this.state;
    return textItems.map((item, index) => {
      return (
        <li key={index} className='modNav-item'>
          <a
            href='#url'
            className={`modNav-item-link ${tabId === index ? 'selected' : ''}`}
            onClick={this.handleClickAtTab(index)}
          >
            {item}
          </a>
        </li>
      );
    });
  }
  public handleClickAtTab = (id: number) => {
    return () => this.setState({ tabId: id });
  }
  public textModItem = ['2-up', 'Only Diff', 'Loupe', 'Swipe', 'Onion Skin'];
  public getViewMod() {
    return (
      <>
        <nav className='modNav m-0 pt-1 pb-1' aria-label='Foo bar'>
          <ul className='modNav-body'>{this.getViewModItem(this.textModItem)}</ul>
        </nav>
      </>
    );
  }

  public render(): JSX.Element {
    return (
      <>
        <div className={`Box-row Box-row--darkgray d-flex flex-justify-center`}>{this.getBoxContent()}</div>
        <div className={`Box-footer Box-row--gray p-0`}>{this.getViewMod()}</div>
      </>
    );
  }
}
