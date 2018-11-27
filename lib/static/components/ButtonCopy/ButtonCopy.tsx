import * as React from 'react';

import Clipboard from 'react-clipboard.js';
import Octicon, { Clippy } from '@githubprimer/octicons-react';

interface IButtonCopy {
  textToCopy: string;
}

class ButtonCopy extends React.Component<IButtonCopy> {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.getText = this.getText.bind(this);
  }
  public onSuccess() {
    console.info('successfully copied');
  }

  public getText(): string {
    return this.props.textToCopy;
  }

  public render() {
    return (
      <React.Fragment>
        <div className='text-gray' aria-label='Copy' data-copied-hint='Copied!'>
          <Clipboard component='div' option-text={this.getText} onSuccess={this.onSuccess}>
            <Octicon icon={Clippy} />
          </Clipboard>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonCopy;
