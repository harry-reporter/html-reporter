import * as React from 'react';
import Button from 'src/components/ui/Button';

interface ControlPanelProps {}

const ControlPanel: React.SFC<ControlPanelProps> = ({}) => {
  return (
    <>
      <Button asLink={true}>что-то</Button>
    </>
  );
};

export default ControlPanel;
