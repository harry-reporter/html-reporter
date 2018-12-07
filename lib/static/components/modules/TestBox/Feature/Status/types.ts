import { TestStatus } from 'src/store/modules/tests/types';
import { ResultViewerProps } from '../Viewer/types';

export interface StatusProps {
  title: string;
  status: TestStatus;
  className?: string;
  data: ResultViewerProps;
  pageCount: number;
  pageCurrent: number;
  handleDataChange: (e) => void;

  onClickAtTitle: (e) => any;
}
