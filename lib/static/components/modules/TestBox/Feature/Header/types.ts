import { Browser, TestStatus } from 'src/store/modules/tests/types';

export interface HeaderProps {
  data: Browser;
  status: TestStatus;
  title: string;
  className?: string;
  isOpenedFeature: boolean;
  handleViewChange: (e: any) => void;
  viewType: string;

  onToggle: () => any;
}
