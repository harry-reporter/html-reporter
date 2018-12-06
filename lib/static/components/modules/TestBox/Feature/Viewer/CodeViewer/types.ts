export interface ICodeViewerProps {
  metaInfo: {
    file: string;
    sessionId: string;
    url: string;
    platform?: string;
    textFile?: string;
  };
}
