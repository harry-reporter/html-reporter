import { Browser } from 'src/store/modules/testFeatures/types';

export interface ControlsProps {
  isOpenedFeature: boolean;
  data: Browser;

  onToggle: () => any;
}
