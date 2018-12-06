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
    return status === 'success' ? 'green' : status === 'fail' ? 'red' : 'gray';
  }
  public getViewBox(item: IImagesInfo) {
    let viewBoxWrap: any = null;
    if (item.status === 'success') {
      viewBoxWrap = this.getSuccessBoxTemplate(item, <SuccessBox {...item} />);
    }
    if (item.status === 'fail') {
      viewBoxWrap = this.getSuccessBoxTemplate(item, <FailBox {...item} />);
    }
    if (item.status === 'error') {
      viewBoxWrap = <ErrorBox {...item} />;
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
      return <React.Fragment key={id}>{this.getViewBox(item)}</React.Fragment>;
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
