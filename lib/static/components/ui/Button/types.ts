export interface ButtonProps {
  className?: string;
  asLink?: boolean;

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}
