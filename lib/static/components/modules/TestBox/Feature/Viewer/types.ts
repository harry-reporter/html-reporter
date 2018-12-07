export interface IViewerProps {
  name: string;
  result: IResultViewerProps;
  retries: IResultViewerProps[];
  type: 'code' | 'tests' | 'screenshot';
  className?: string;
}

export interface IResultViewerProps {
  attempt: number;
  imagesInfo: IImagesInfo[];
  metaInfo: IMetaInfo;
  multipleTabs: boolean;
  name: string;
  screenshot: boolean;
  status: 'success' | 'fail' | 'error';
  suiteUrl: string;
  reason?: IReasonProps;
  type: 'code' | 'tests' | 'screenshot';
  className?: string;
}

export interface IImagesInfo {
  actualPath?: string;
  reason?: IReasonProps;
  refImagePath: string;
  stateName: string;
  status: 'error' | 'success' | 'fail';
  expectedPath?: string;
  diffPath?: string;
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
