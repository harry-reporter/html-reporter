import * as React from 'react';

import ImageDiffSwipe from './ImageDiffSwipe/ImageDiffSwipe';
import ImageDiffLoupe from './ImageDiffLoupe/ImageDiffLoupe';
import ImageDiffOnionSkin from './ImageDiffOnionSkin/ImageDiffOnionSkin';

import './types';
import './FailBox.css';
import { IImagesInfo } from '../types';

export default class FailBox extends React.PureComponent<IImagesInfo, IFailBoxState> {
  public state = {
    tabId: 0,
    valueSwipe: 0.5,
    valueOnionSkin: 0.5,
    valueLoupe: 2,
  };
  public textModItem = ['2-up', 'Only Diff', 'Loupe', 'Swipe', 'Onion Skin'];
  public getBoxContent(): JSX.Element {
    return (
      <>
        {this.getBoxItem('Expected', 'green', this.props.expectedPath)}
        {this.getBoxItem('Actual', 'red', this.props.actualPath)}
        {this.getBoxItem('Diff', 'gray', this.props.diffPath)}
      </>
    );
  }

  public getBoxContentDiff(): JSX.Element {
    return <>{this.getBoxItem('Diff', 'gray', this.props.diffPath)}</>;
  }

  public getBoxContentSwipe(): JSX.Element {
    const imageProps = {
      before: this.props.expectedPath,
      after: this.props.actualPath,
      value: this.state.valueSwipe,
      className: 'BoxContentSwipe-ImageDiff',
    };
    const rangeProps = {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
      defaultValue: `${this.state.valueSwipe}`,
      onChange: this.handleInputChange,
      className: 'BoxContentSwipe-Range mt-2',
    };
    return (
      <div className='BoxContentSwipe d-flex flex-column'>
        <ImageDiffSwipe {...imageProps} />
        <input {...rangeProps} />
      </div>
    );
  }

  public handleInputChange = (e) => {
    return this.setState({ valueSwipe: parseFloat(e.target.value) });
  }
  public handleInputChangeOnion = (e) => {
    return this.setState({ valueOnionSkin: parseFloat(e.target.value) });
  }

  public getBoxItem(cn: string, color: string, imgPath: string): JSX.Element {
    const imgProps = {
      src: imgPath,
      alt: `${cn}-Img`,
      className: `FailBox-Img border border-${color}`,
    };
    return (
      <div className={cn}>
        <p className={`Title text-${color} text-bold`}>{cn}</p>
        <img {...imgProps} />
      </div>
    );
  }

  public getItem(item: string, key: number): JSX.Element {
    const liProps = {
      key,
      className: 'modNav-item',
    };
    const linkProps = {
      href: '#url',
      className: `modNav-item-link ${this.state.tabId === key ? 'selected' : ''}`,
      onClick: this.handleClickAtTab(key),
    };
    return (
      <li {...liProps}>
        <a {...linkProps}>{item}</a>
      </li>
    );
  }

  public getViewModItem(textItems: string[]): JSX.Element[] {
    return textItems.map((item, index) => {
      return this.getItem(item, index);
    });
  }
  public handleClickAtTab = (id: number) => {
    return () => this.setState({ tabId: id });
  }
  public getViewMod() {
    return (
      <>
        <nav className='modNav m-0 pt-1 pb-1' aria-label='Foo bar'>
          <ul className='modNav-body'>{this.getViewModItem(this.textModItem)}</ul>
        </nav>
      </>
    );
  }

  public getBoxContentLoupe() {
    const imageDiffLoupeProps = {
      before: this.props.expectedPath,
      after: this.props.actualPath,
      zoom: this.state.valueLoupe,
      className: 'BoxContentLoupe-ImageDiff',
    };
    const rangeDiffLoupeProps = {
      type: 'range',
      min: 1,
      max: 3,
      step: 0.01,
      defaultValue: `${this.state.valueLoupe}`,
      onChange: this.handleInputChangeLoupe,
      className: 'BoxContentLoupe-range mt-2',
    };
    return (
      <div className='BoxContentLoupe d-flex flex-column'>
        <ImageDiffLoupe {...imageDiffLoupeProps} />
        <input {...rangeDiffLoupeProps} />
      </div>
    );
  }

  public handleInputChangeLoupe = (e) => {
    this.setState({ valueLoupe: parseFloat(e.target.value) });
  }

  public getBoxContentOnionSkin() {
    const imageDiffOnionSkinProps = {
      before: this.props.expectedPath,
      after: this.props.actualPath,
      value: this.state.valueOnionSkin,
      className: 'BoxContentOnionSkin-ImageDiff',
    };
    const rangeImageDiffOnionSkinProps = {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
      defaultValue: `${this.state.valueOnionSkin}`,
      onChange: this.handleInputChangeOnion,
      className: 'BoxContentOnionSkin-range mt-2',
    };
    return (
      <div className='BoxContentOnionSkin d-flex flex-column'>
        <ImageDiffOnionSkin {...imageDiffOnionSkinProps} />
        <input {...rangeImageDiffOnionSkinProps} />
      </div>
    );
  }

  public getView() {
    let view: any = null;
    switch (this.state.tabId) {
      case 0:
        view = this.getBoxContent();
        break;
      case 1:
        view = this.getBoxContentDiff();
        break;
      case 2:
        view = this.getBoxContentLoupe();
        break;
      case 3:
        view = this.getBoxContentSwipe();
        break;
      case 4:
        view = this.getBoxContentOnionSkin();
        break;

      default:
        view = this.getBoxContent();
    }
    return view;
  }

  public render(): JSX.Element {
    return (
      <>
        <div className={`Box-row Box-row--darkgray d-flex flex-justify-center`}>{this.getView()}</div>
        <div className={`Box-footer Box-row--gray p-0`}>{this.getViewMod()}</div>
      </>
    );
  }
}
