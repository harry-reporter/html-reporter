import * as React from 'react';
import BoxViewAsserts from '../BoxViewAsserts/BoxViewAsserts';
import BoxViewError from '../BoxViewError/BoxViewError';

interface ScreenshotViewerProps {
  type: 'error' | 'fail' | 'success';
}

const ScreenshotViewer: React.SFC<ScreenshotViewerProps> = (props) => {
  let ViewerWrapper: any = null;
  props.type === 'error' ? (ViewerWrapper = BoxViewError) : (ViewerWrapper = BoxViewAsserts);

  return (
    <div className={'Box-row'}>
      <ViewerWrapper {...props} />
    </div>
  );
};

export default ScreenshotViewer;
