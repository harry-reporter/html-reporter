export interface ControlViewersProps {
  selectedId: number;
  handleViewChange: (e: any) => void;
  viewType: string;
}
export interface ControlViewersState {
  selectedId: number;
}
