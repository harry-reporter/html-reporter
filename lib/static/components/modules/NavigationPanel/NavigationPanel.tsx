import * as React from 'react';
import Status from './Status';

import { NavigationPanelProps } from './types';

const NavigationPanel: React.SFC<NavigationPanelProps> = () => {
  return (
    <section>
      <Status name={'Total Tests'} value={8714} />
      <Status name={'Passed'} value={8714} color={'green'} />
      <Status name={'Failed'} value={15} color={'red'} />
      <Status name={'Skipped'} value={252} color={'gray'} />
      <Status name={'Retries'} value={455} color={'orange-light'} />
    </section>
  );
};

export default NavigationPanel;
