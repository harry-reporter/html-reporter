// import { isFailStatus, isErroredStatus } from '../../common-utils';

const isErroredStatus = (status) => status === 'ERROR';
const isFailStatus = (status) => status === 'FAIL';

export const isSuiteFailed = (suite) => {
  return isFailStatus(suite.status) || isErroredStatus(suite.status);
};

export const isAcceptable = ({status, reason = ''}: any) => {
  const stack = reason && reason.stack;

  return isErroredStatus(status) && stack.startsWith('NoRefImageError') || isFailStatus(status);
};
