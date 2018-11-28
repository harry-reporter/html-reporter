export interface IAccordeonProps {
  title: string;
  status?: 'success' | 'fail';
}

export interface IAccordeonState {
  isOpen: boolean;
}

export interface IBoxViewErrorProps {
  message: string;
  stack: string;
  image?: any;
}

export interface IBoxViewState {
  message: string;
  stack: string;
  image?: any;
}

export interface IButtonCopy {
  textToCopy: string;
}

export interface IButtonsProps {
  title: string;
  icon?: any;
  onClick?: () => void;
}

export interface IButtonsGroupProps {
  btns: IButtonsProps[];
}

export interface IHeaderProps {
  [key: string]: number;
}

export interface IViewAssertsProps {
  stateName: string;
  refImagePath: string;
  status: 'success' | 'fail';
  expectedPath: string;
}

export interface IBoxViewAssertsProps {
  imagesInfo: IViewAssertsProps[];
}

export interface IBoxViewAssertsState {
  imagesInfo: IViewAssertsProps[];
}
