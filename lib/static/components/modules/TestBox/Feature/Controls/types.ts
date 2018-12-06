import { Browser } from 'src/store/modules/tests/types';

export interface ControlsProps {
  isOpenedFeature: boolean;
  data: Browser;
  handleViewChange: (e: any) => void;
  onToggle: () => any;
  viewType: string;
}
