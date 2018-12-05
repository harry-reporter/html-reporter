import * as React from 'react';
import Dropdown from 'src/components/ui/Dropdown';
import DropdownItem from 'src/components/ui/DropdownItem';
import Button from 'src/components/ui/Button';
import ControlPanelStyled from './styled';

import 'src/styles.css';

interface ControlPanelProps {}

const ControlPanel: React.SFC<ControlPanelProps> = ({}) => {
  return (
    <ControlPanelStyled>
      <Dropdown className={'sos'} title={'Run tests'}>
        <DropdownItem title={'Run all tests'} />
        <DropdownItem title={'Restart failed tests'} />
      </Dropdown>

      <Dropdown className={'sos'} title={'Show/hide'}>
        <DropdownItem title={'Collapse all'} />
        <DropdownItem title={'Expand all'} />
        <DropdownItem title={'Expand errors'} />
        <DropdownItem title={'Expand retries'} />
      </Dropdown>

      <Button title={'View mode'} />
      <Button title={'Accept all'} />
    </ControlPanelStyled>
  );
};

export default ControlPanel;
