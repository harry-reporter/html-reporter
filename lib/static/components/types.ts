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

export interface IIt {
  name: string;
  result: {
    suiteUrl: string;
    name: string;
    metaInfo: {
      url: string;
      file: string;
      sessionId: string;
    };
    imagesInfo: [{ stateName: string; refImagePath: string; status: string; expectedPath: string }];

    screenshot: boolean;
    multipleTabs: boolean;
    status: 'success' | 'fail';
    attempt: number;
  };
}
