import * as React from 'react';

import CodeViewer from './CodeViewer';
import ScreenshotViewer from './ScreenshotViewer';
import ScriptViewer from './ScriptViewer';

import { IViewerProps } from './types';

export default class Viewer extends React.PureComponent<IViewerProps> {
  public render() {
    let ViewerWrapper: any = null;

    switch (this.props.type) {
      case 'code':
        ViewerWrapper = CodeViewer;
        break;
      case 'tests':
        ViewerWrapper = ScriptViewer;
        break;
      default:
        ViewerWrapper = this.props.result.imagesInfo.length > 0 ? ScreenshotViewer : ScriptViewer;
    }

    return <ViewerWrapper {...this.props.result} />;
  }
}
