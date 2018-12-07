import * as React from 'react';

import Octicon, { ChevronDown, ChevronUp, Eye } from '@githubprimer/octicons-react';
import { ButtonIconContainerStyled, ControlsStyled } from '../../Header/styled';

import Button from 'src/components/ui/Button/Button';
import ButtonsGroup from 'src/components/ui/ButtonGroup/ButtonGroup';

import { ControlsProps } from 'src/components/modules/TestBox/Feature/Controls/types';
import ControlViewers from 'src/components/modules/TestBox/Feature/Controls/ControlViewers/ControlViewers';
import ButtonEye from 'src/components/ui/ButtonEye/ButtonEye';

export default class Controls extends React.PureComponent<ControlsProps> {
  public getChevron = (isOpenedFeature) => (isOpenedFeature ? ChevronUp : ChevronDown);

  // TODO: объявить объекты, которые передаются в качестве пропс
  public render() {
    return (
      <ControlsStyled>
        <ControlViewers selectedId={2} handleViewChange={this.props.handleViewChange} viewType={this.props.viewType} />
        <ButtonsGroup className={'mr-3'} btns={[{ title: 'Skip', size: 'sm' }, { title: 'Accept', size: 'sm' }]} />
        <Button size={'sm'} className={'mr-3'} title={'View'} />
        <ButtonIconContainerStyled className={'mr-3'} role={'button'} onClick={this.props.onToggle}>
          <ButtonEye url={this.props.data.metaInfo.url} />
        </ButtonIconContainerStyled>
        <ButtonIconContainerStyled role={'button'} onClick={this.props.onToggle}>
          <Octicon icon={this.getChevron(this.props.isOpenedFeature)} />
        </ButtonIconContainerStyled>
      </ControlsStyled>
    );
  }
}
