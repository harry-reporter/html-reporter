export interface IViewAssertsProps {
  className?: string;
  stateName: string;
  refImagePath: string;
  status: 'success' | 'fail';
  actualPath?: string;
  expectedPath: string;
  diffPath?: string;
  types?: 'viewAsserts' | 'files' | 'code' | 'error';
  imagesInfo?: IViewAssertsProps[];
  imageInfo?: IViewAssertsProps;
  message?: string;
  stack?: string;
  image?: any;
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
