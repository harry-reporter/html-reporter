import * as React from 'react';

interface CodeViewerProps {
  metaInfo: {
    file: string;
    sessionId: string;
    url: string;
    platform?: string;
    textFile?: string;
  };
}

export default class CodeViewer extends React.PureComponent<CodeViewerProps> {
  public render() {
    return (
      <>
        <div className='Box-row Box-row--gray Box--condensed pt-2 pb-2'>
          <p className='mb-1'>
            <strong>Meta-info: </strong>
          </p>
          <p className='m-0'>
            <strong>platform: </strong>
            {this.props.metaInfo.platform}
          </p>
          <p className='m-0'>
            <strong>url: </strong> <a href={`${this.props.metaInfo.url}`}>{this.props.metaInfo.url}</a>
          </p>
          <p className='m-0'>
            <strong>file: </strong>
            {this.props.metaInfo.file}
          </p>
          <p className='m-0'>
            <strong>sessionId: </strong>
            {this.props.metaInfo.sessionId}
          </p>
        </div>
        <div className='Box-row'>
          <pre className='pl-3'>it('Hello, Harry!'){this.props.metaInfo.textFile}</pre>
        </div>
      </>
    );
  }
}
