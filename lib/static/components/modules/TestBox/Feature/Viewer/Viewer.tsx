import * as React from 'react';

import CodeViewer from './CodeViewer';
import ScreenshotViewer from './ScreenshotViewer';
import ScriptViewer from './ScriptViewer';

import { IViewerProps } from './types';

const Viewer: React.SFC<IViewerProps> = (props) => {
  let ViewerWrapper: any = null;

  switch (props.type) {
    case 'code':
      ViewerWrapper = CodeViewer;
      break;
    case 'tests':
      ViewerWrapper = ScriptViewer;
      break;
    default:
      ViewerWrapper = props.result.imagesInfo.length > 0 ? ScreenshotViewer : ScriptViewer;
  }

  return <ViewerWrapper {...props.result} />;
};

export default Viewer;
