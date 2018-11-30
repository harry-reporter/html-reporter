export type TestStatus = 'fail' | 'success';

export interface CheckAssert {
  status: TestStatus;
  title: string;
  images?: {
    expected: string;
    actual: string;
    diff: string;
  };
}

export interface CheckMeta {
  platform: string;
  url: string;
  file: string;
  sessionId: string;
}

export interface CheckError {
  message: string;
  stack: string[];
  image: string;
}
export interface Check {
  status: TestStatus;
  title: string;
  attempt: number;
  tab?: number;
  error?: CheckError;
  asserts?: CheckAssert;
  meta?: CheckMeta;
  code?: string;
}

export interface TestFeature {
  title: string;
  checks: Check[];
}

export interface TestFeaturesStore {
  tests: TestFeature[];
  passed: number;
  failed: number;
  skipped: number;
  retries: number;
}
