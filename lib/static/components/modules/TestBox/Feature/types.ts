import { Browser } from 'src/store/modules/tests/types';
import { IResultViewerProps } from './Viewer/types';

export interface FeatureProps {
  data: any;
}
export interface IFeatureState {
  isOpen: boolean;
  viewType: string;
  viewData: IResultViewerProps;
  pageCount: number;
  pageCurrent: number;
}
