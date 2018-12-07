import { TestStatus } from 'src/store/modules/tests/types';
import { ResultViewerProps } from '../Viewer/types';

export interface IHeaderProps {
  data: ResultViewerProps;
  status: TestStatus;
  title: string;
  className?: string;
  isOpenedFeature: boolean;
  handleViewChange: (e: any) => void;
  viewType: string;
  handleDataChange: (a: any) => void;
  pageCount: number;
  pageCurrent: number;
  onToggle: () => any;
}
