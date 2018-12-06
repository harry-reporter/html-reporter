import * as React from 'react';
import Dropdown from 'src/components/ui/Dropdown';
import DropdownItem from 'src/components/ui/DropdownItem';
import Button from 'src/components/ui/Button';
import TextInput from 'src/components/ui/TextInput';
import ControlPanelStyled from './styled';

import 'src/styles.css';

interface ControlPanelProps {}

const ControlPanel: React.SFC<ControlPanelProps> = ({}) => {
  return (
    <ControlPanelStyled>
      <TextInput placeholred={'Url input'} className={'mr-2'} />
      <Dropdown className={'mr-2'} title={'Run tests'}>
        <DropdownItem title={'Run all tests'} />
        <DropdownItem title={'Restart failed tests'} />
      </Dropdown>

      <Dropdown className={'mr-2'} title={'Show/hide'}>
        <DropdownItem title={'Collapse all'} />
        <DropdownItem title={'Expand all'} />
        <DropdownItem title={'Expand errors'} />
        <DropdownItem title={'Expand retries'} />
      </Dropdown>

      <Button title={'View mode'} className={'mr-2'} />
      <Button title={'Accept all'} className={'mr-2'} />
    </ControlPanelStyled>
  );
};

export default ControlPanel;
