import * as React from 'react';
import { IScriptViewerProps } from './types';

export default class ScriptViewer extends React.PureComponent<IScriptViewerProps> {
  public render() {
    return (
      <>
        <div className='Box-row Box-row--gray Box--condensed pt-2 pb-2'>
          <p className='mb-1'>
            <strong>Description: </strong>
          </p>
        </div>
        <div className='Box-row'>
          <pre className='pl-3'>
            - do: получить выдачу по запросу "Harry" - assert: получена выдача по указанному запросу
            {this.props.textTest}
          </pre>
        </div>
      </>
    );
  }
}
