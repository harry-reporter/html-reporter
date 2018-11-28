import * as React from 'react';

import CodeViewer from './CodeViewer';
import ScreenshotViewer from './ScreenshotViewer';
import ScriptViewer from './ScriptViewer';

import { ViewerProps } from './types';

const Viewer: React.SFC<ViewerProps> = (props) => {
  let ViewerWrapper: any = null;

  switch (props.type) {
    case 'code':
      ViewerWrapper = CodeViewer;
      break;
    case 'screenshot':
      ViewerWrapper = ScreenshotViewer;
      break;
    case 'script':
      ViewerWrapper = ScriptViewer;
      break;
  }

  return (
    <div className={'Box-row'}>
      <ViewerWrapper {...props} />
    </div>
  );
};

export default Viewer;
