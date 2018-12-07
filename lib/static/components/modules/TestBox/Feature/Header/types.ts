import { Browser, TestStatus } from 'src/store/modules/tests/types';
import { IResultViewerProps } from '../Viewer/types';

export interface IHeaderProps {
  data: IResultViewerProps;
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
