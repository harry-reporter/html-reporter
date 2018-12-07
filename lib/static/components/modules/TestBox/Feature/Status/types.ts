import { Browser, TestStatus } from 'src/store/modules/tests/types';
import { IResultViewerProps } from '../Viewer/types';

export interface IStatusProps {
  title: string;
  status: TestStatus;
  className?: string;
  data: IResultViewerProps;
  pageCount: number;
  pageCurrent: number;
  handleDataChange: (e) => void;

  onClickAtTitle: (e) => any;
}
