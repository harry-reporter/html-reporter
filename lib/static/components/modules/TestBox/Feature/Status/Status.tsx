import * as React from 'react';
import cn from 'classnames';

import Pagination from 'src/components/ui/Pagination';
import StatusIcon from 'src/components/modules/TestBox/Feature/Status/Icon';
import Text from 'src/components/ui/Text/Text';
import { BrowserNameStyled } from './styled';

import { StatusProps } from './types';
import { ColorType } from 'src/components/ui/types';

const Status: React.SFC<StatusProps> = (props) => {
  const { title, status, data, className } = props;

  const cnStatus = cn(className, 'd-flex flex-justify-between flex-items-center');

  const isFail = (status === 'fail') || (status === 'error');
  const statusColor: ColorType = isFail ? 'red' : 'green';
  const maxPage = data.result.attempt + 1;

  return (
    <Text as={'span'} className={cnStatus} textColor={statusColor} textType={'bold'}>
      <StatusIcon mr={2} isFail={isFail} />
      <BrowserNameStyled
        as={'span'}
        textType={'bold'}
        textColor={statusColor}
        mr={6}
        onClick={props.onClickAtTitle}
      >
        {title}
      </BrowserNameStyled>
      <Text as={'span'} textColor={'gray'} mr={2}><i>Attempts:</i> </Text>
      <Pagination defaultCurrentPage={maxPage} hasPreventDefault={true} maxPage={maxPage} />
    </Text>
  );
};

export default Status;
