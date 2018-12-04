import { Browser, TestStatus } from 'src/store/modules/tests/types';

export interface StatusProps {
  title: string;
  status: TestStatus;
  className?: string;
  data: Browser;

  onClickAtTitle: (e) => any;
}
