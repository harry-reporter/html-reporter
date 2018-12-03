export interface ButtonProps {
  className?: string;
  asLink?: boolean;
  icon?: any;
  title?: string;
  isSelected?: boolean;
  size?: 'sm';

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}
