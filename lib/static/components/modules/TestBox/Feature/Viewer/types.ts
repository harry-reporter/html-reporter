export interface IViewerProps {
  name: string;
  result: IResultViewerProps;
  retries: IResultViewerProps[];
  type: 'code' | 'tests' | 'screenshot';
  className?: string;
  measure: () => any;
}

export interface IResultViewerProps {
  attempt: number;
  imagesInfo: ImagesInfo[];
  metaInfo: IMetaInfo;
  multipleTabs: boolean;
  name: string;
  screenshot: boolean;
  status: 'success' | 'fail' | 'error';
  suiteUrl: string;
  reason?: IReasonProps;
}

export interface ImagesInfo {
  actualPath?: string;
  reason?: IReasonProps;
  refImagePath: string;
  stateName: string;
  status: 'error' | 'success' | 'fail';
  expectedPath?: string;
  diffPath?: string;
  onLoad?: any;
}

export interface IMetaInfo {
  url: string;
  file: string;
  sessionId: string;
}
export interface IReasonProps {
  message: string;
  stack: string;
}
