import * as React from 'react';

import { IViewerProps, IImagesInfo } from '../types';
import SuccessBox from '../SuccessBox/SuccessBox';
import FailBox from '../FailBox/FailBox';
import Link from 'src/components/ui/Link/Link';
import ErrorBox from '../ErrorBox/ErrorBox';

interface IScreenshotViewerState {
  isOpen: boolean;
}

export default class ScreenshotViewer extends React.Component<IViewerProps, IScreenshotViewerState> {
  constructor(props: IViewerProps) {
    super(props);
    this.state = { isOpen: this.props.result.status !== 'success' };
  }

  public getColor() {
    const status = this.props.result.status;
    let color = 'gray';
    if (status === 'success') { color = 'green'; }
    if (status === 'fail') { color = 'red'; }
    return color;
  }
  public getViewBox(item: IImagesInfo) {
    let viewBoxWrap: any = null;
    switch (item.status) {
      case 'success':
        viewBoxWrap = this.getSuccessBoxTemplate(item, <SuccessBox {...item} />);
        break;
      case 'fail':
        viewBoxWrap = this.getSuccessBoxTemplate(item, <FailBox {...item} />);
        break;
      case 'error':
        viewBoxWrap = <ErrorBox {...item} />;
        break;
      default:
        viewBoxWrap = this.getSuccessBoxTemplate(item, <SuccessBox {...item} />);
    }

    return viewBoxWrap;
  }

  public getSuccessBoxTemplate(item: IImagesInfo, viewBoxWrap: JSX.Element) {
    return (
      <>
        <div className={'Box Box-row Box--condensed Box-header d-flex flex-justify-between'}>
          <h4 className={`Title Box-title text-${this.getColor()}`}>{item.stateName}</h4>
          <Link className={'Link flex-justify-end'} url='' onClick={this.onLinkClick}>
            {this.state.isOpen ? 'Hide' : 'Show'}
          </Link>
        </div>
        <div className={`Box-detail${this.state.isOpen ? '' : '_isHidden'}`}>{viewBoxWrap}</div>
      </>
    );
  }

  public renderViewBox = () => {
    return this.props.result.imagesInfo.map((item: IImagesInfo, id: number) => {
      return <>{this.getViewBox(item)}</>;
    });
  }

  public render() {
    return <>{this.renderViewBox()}</>;
  }
  public onLinkClick = (e) => {
    e.preventDefault();
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }
}
