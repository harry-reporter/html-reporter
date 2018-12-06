import { Browser, TestStatus } from 'src/store/modules/testFeatures/types';

export interface StatusProps {
  title: string;
  status: TestStatus;
  className?: string;
  data: Browser;
}
