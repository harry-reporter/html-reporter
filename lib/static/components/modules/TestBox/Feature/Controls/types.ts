import { Browser } from 'src/store/modules/tests/types';
import { IResultViewerProps } from '../Viewer/types';

export interface ControlsProps {
  isOpenedFeature: boolean;
  data: IResultViewerProps;
  handleViewChange: (e: any) => void;
  onToggle: () => any;
  viewType: string;
}
