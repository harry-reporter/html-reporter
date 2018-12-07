import { ResultViewerProps } from '../Viewer/types';

export interface ControlsProps {
  isOpenedFeature: boolean;
  data: ResultViewerProps;
  handleViewChange: (e: any) => void;
  onToggle: () => any;
  viewType: string;
}
