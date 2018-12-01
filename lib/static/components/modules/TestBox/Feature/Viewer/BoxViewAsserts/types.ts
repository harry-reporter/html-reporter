export interface IViewAssertsProps {
  className?: string;
  stateName: string;
  refImagePath: string;
  status: 'success' | 'fail' | 'error';
  actualPath?: string;
  expectedPath: string;
  diffPath?: string;
  types?: 'viewAsserts' | 'files' | 'code' | 'error';
  imagesInfo?: IViewAssertsProps[];
  imageInfo?: IViewAssertsProps;
  image?: any;
  reason?: {
    message: string;
    stack: string;
  };
}

export interface IBoxView {
  className: string;
  types?: 'viewAsserts' | 'files' | 'code' | 'error';
  imagesInfo?: IViewAssertsProps[];
  imageInfo?: IViewAssertsProps;
  message?: string;
  stack?: string;
  image?: any;
}
