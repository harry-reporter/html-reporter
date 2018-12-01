import * as React from 'react';
import cn from 'classnames';

import Pagination from 'src/components/ui/Pagination/Pagination';
import StatusIcon from 'src/components/modules/TestBox/Feature/Status/StatusIcon';
import Text from 'src/components/ui/Text/Text';

import { TestStatus } from 'src/components/types';
import { ColorType } from 'src/components/ui/types';

interface StatusProps {
  title: string;
  status: TestStatus;
  className?: string;
  data: any;
}

const Status: React.SFC<StatusProps> = (props) => {
  const { title, status, data, className } = props;

  const cnStatus = cn(className, 'd-flex flex-justify-between flex-items-center');

  const isFail = status === 'fail';
  const statusColor: ColorType = isFail ? 'red' : 'green';

  return (
    <Text className={cnStatus} textColor={statusColor} textType={'bold'}>
      <StatusIcon mr={2} isFail={isFail} />
      <Text as={'span'} textType={'bold'} textColor={statusColor} mr={3}>{title}</Text>
      <Pagination hasPreventDefault={true} maxPage={data.attempt + 1} />
    </Text>
  );
};

export default Status;
