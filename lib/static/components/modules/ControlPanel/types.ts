export interface ControlPanelProps {
  url: string;

  setUrl: (value: string) => {type: string, payload: string};
  setViewMode: (value: string) => {type: string, payload: string};
  runAllTests: () => any;
  runFailedTests: any;
  acceptAll: any;
}
