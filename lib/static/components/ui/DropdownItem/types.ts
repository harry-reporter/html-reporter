export interface DropdownItemProps {
  title: string;
  url?: string;
  className?: string;

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}
