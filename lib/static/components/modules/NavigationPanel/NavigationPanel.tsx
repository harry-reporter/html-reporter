import * as React from 'react';
import Status from './Status';

import { NavigationPanelProps } from './types';

const NavigationPanel: React.SFC<NavigationPanelProps> = () => {
  return (
    <section>
      <Status mr={3} name={'Total Tests'} value={8714} />
      <Status mr={3} name={'Passed'} value={8714} color={'green'} />
      <Status mr={3} name={'Failed'} value={15} color={'red'} />
      <Status mr={3} name={'Skipped'} value={252} color={'gray'} />
      <Status mr={3} name={'Retries'} value={455} color={'orange-light'} />
    </section>
  );
};

export default NavigationPanel;
