export enum TestsTypeKey {
  total = 'total',
  passed = 'passed',
  failed = 'failed',
  skipped = 'skipped',
  retries = 'retries',
}

export interface AppStore {
  selectedTestsType: TestsTypeKey;
}
