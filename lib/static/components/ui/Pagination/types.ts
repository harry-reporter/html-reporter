export interface SunNav {
  href?: string;
}

export interface PaginationProps {
  dataList?: SunNav[];
  maxPage?: number;
  hasPreventDefault?: boolean;

  onChange?: (currentPage: number) => any;
}
export interface PaginationState {
  currentPage: number;
}
