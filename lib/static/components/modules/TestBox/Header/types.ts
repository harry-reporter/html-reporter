export interface HeaderProps {
  title: string;
  status: 'fail' | 'success';
  isOpenedBox: boolean;
  onToggle: () => any;
}

export interface HeaderState {}
