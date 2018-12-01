import * as React from 'react';

import Octicon, { ChevronDown, ChevronUp, Code, File, ListOrdered, Eye } from '@githubprimer/octicons-react';
import { ButtonIconContainerStyled, ControlsStyled } from '../../Header/styled';

import Button from 'src/components/ui/Button/Button';
import ButtonsGroup from 'src/components/ui/ButtonGroup/ButtonGroup';

import { ControlsProps } from 'src/components/modules/TestBox/Feature/Controls/types';

const Controls: React.SFC<ControlsProps> = (props) => {
  const { isOpenedFeature } = props;
  const getChevron = () => isOpenedFeature ? ChevronUp : ChevronDown;

  // TODO: объявить объекты, которые передаются в качестве пропс
  return (
    <ControlsStyled>
      <ButtonsGroup
        className={'mr-3'}
        btns={[{ title: '', icon: Code }, { title: '', icon: ListOrdered }, { title: '', icon: File }]}
      />
      <ButtonsGroup className={'mr-3'} btns={[{ title: 'Skip' }, { title: 'Accept' }]} />
      <Button className={'mr-3'} title={'View'} />
      <ButtonIconContainerStyled className={'mr-3'} role={'button'} onClick={props.onToggle}>
        <Octicon icon={Eye} />
      </ButtonIconContainerStyled>
      <ButtonIconContainerStyled role={'button'} onClick={props.onToggle}>
        <Octicon icon={getChevron()} />
      </ButtonIconContainerStyled>
    </ControlsStyled>
  );
};

export default Controls;
