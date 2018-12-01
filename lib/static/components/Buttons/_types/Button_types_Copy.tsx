import * as React from 'react';

import Clipboard from 'react-clipboard.js';
import Octicon, { Clippy } from '@githubprimer/octicons-react';

import { IButtonCopyProps } from '../index';
import './Button_types_Copy.css';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn, classnames } from '@bem-react/classname';

const ButtonCopy: ModBody<IButtonCopyProps> = (Base, { className, textToCopy }) => {
  const getText = () => {
    return textToCopy;
  };
  const cnButtonCopy = cn(className);
  return (
    <div
      className={classnames(cn(className)(), 'text-gray', 'tooltipped', 'tooltipped-sw')}
      aria-label='Copy'
      data-copied-hint='Copied!'
    >
      <Clipboard component='div' option-text={getText}>
        <Octicon icon={Clippy} />
      </Clipboard>
    </div>
  );
};

export const ButtonTypesCopy = withBemMod<IButtonCopyProps>('Buttons', { types: 'copy' }, ButtonCopy);

/*
class ButtonCopy extends : ModBody<IButtonCopy>(Base, {className}) {
  constructor(props) {
    super(props);
  }

  public getText = () => {
    return this.props.textToCopy;
  }

  public render() {
    return (
      <div className='Button_isCopy text-gray tooltipped tooltipped-sw' aria-label='Copy' data-copied-hint='Copied!'>
        <Clipboard component='div' option-text={this.getText}>
          <Octicon icon={Clippy} />
        </Clipboard>
      </div>
    );
  }
}

export default ButtonCopy;*/
