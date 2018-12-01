export interface ButtonProps {
  className?: string;
  asLink?: boolean;
  icon?: any;
  title?: string;

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}
