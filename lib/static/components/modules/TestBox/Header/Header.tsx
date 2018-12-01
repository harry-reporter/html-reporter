import * as React from 'react';

import Octicon, { ChevronDown, ChevronUp, Clippy } from '@githubprimer/octicons-react';
import Text from 'src/components/ui/Text/Text';
import { ClipboardStyled, ControlsStyled, ButtonIconContainerStyled } from './styled';

import { HeaderProps, HeaderState } from './types';
import { ColorType } from 'src/components/ui/types';

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  private getTitle = () => this.props.title;
  private getTextColor = (): ColorType => (this.props.status === 'fail' ? 'red' : 'green');
  private getChevron = () => (this.props.isOpenedBox ? ChevronUp : ChevronDown);

  public render(): JSX.Element {
    const { title } = this.props;

    const textColor = this.getTextColor();
    const Chevron = this.getChevron();

    return (
      <div className={'Box-header d-flex flex-justify-between flex-items-center'}>
        <Text textColor={textColor} textType={'bold'}>
          {title}
        </Text>
        <ControlsStyled>
          <ClipboardStyled component='div' option-text={this.getTitle}>
            <Octicon icon={Clippy} />
          </ClipboardStyled>
          <ButtonIconContainerStyled role={'button'} onClick={this.props.onToggle}>
            <Octicon icon={Chevron} />
          </ButtonIconContainerStyled>
        </ControlsStyled>
      </div>
    );
  }
}

export default Header;
