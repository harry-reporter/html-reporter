import { TestStatus } from 'src/store/modules/testFeatures/types';

export interface HeaderProps {
  title: string;
  status: TestStatus;
  isOpenedBox: boolean;
  onToggle: () => any;
}

export interface HeaderState {}
