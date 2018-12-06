import { Suite } from 'src/store/modules/tests/types';

export interface TestBoxProps {
  data: Suite;
  style?: React.CSSProperties;
  className?: string;

  onToggle?: any;
}
export interface TestBoxState {
  isOpen: boolean;
}
