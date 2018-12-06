import { Browser } from 'src/store/modules/tests/types';

export interface ControlsProps {
  isOpenedFeature: boolean;
  data: Browser;

  onToggle: () => any;
}
