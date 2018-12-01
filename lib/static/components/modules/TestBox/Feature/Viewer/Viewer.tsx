import * as React from 'react';

import CodeViewer from './CodeViewer';
import ScreenshotViewer from './ScreenshotViewer';
import ScriptViewer from './ScriptViewer';

import { ViewerStyled } from './styled';
import { ViewerProps } from './types';

const Viewer: React.SFC<ViewerProps> = (props) => {
  let ViewerWrapper: React.ComponentType = null;

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
    <ViewerStyled className={'Box-row'}>
      <ViewerWrapper {...props} />
    </ViewerStyled>
  );
};

export default Viewer;
