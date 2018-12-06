import { Browser, TestStatus } from 'src/store/modules/testFeatures/types';

export interface HeaderProps {
  data: Browser;
  status: TestStatus;
  title: string;
  className?: string;
  isOpenedFeature: boolean;

  onToggle: () => any;
}
