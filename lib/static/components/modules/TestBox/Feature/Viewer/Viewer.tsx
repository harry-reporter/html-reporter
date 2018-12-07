import * as React from 'react';

import CodeViewer from './CodeViewer';
import ScreenshotViewer from './ScreenshotViewer';
import ScriptViewer from './ScriptViewer';

import { ResultViewerProps } from './types';

export default class Viewer extends React.PureComponent<ResultViewerProps> {
  public render() {
    let ViewerWrapper: any = null;
    const { type, imagesInfo } = this.props;
    const defaultViewer = imagesInfo.length > 0 ? ScreenshotViewer : ScriptViewer;

    switch (type) {
      case 'code':
        ViewerWrapper = CodeViewer;
        break;
      case 'tests':
        ViewerWrapper = ScriptViewer;
        break;
      default:
        ViewerWrapper = defaultViewer;
    }

    return <ViewerWrapper {...this.props} />;
  }
}
