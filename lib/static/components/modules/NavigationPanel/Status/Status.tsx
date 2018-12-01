import * as React from 'react';

import Text from 'src/components/ui/Text';
import Button from 'src/components/ui/Button';

import { StatusProps } from './types';
import { withMargin } from 'src/components/hoc/withMargin';

const Status: React.SFC<StatusProps> = ({ name, value, color, className }) => {
  return (
    <Button className={className} asLink={true}>
      <Text as={'span'} textType={'bold'} textColor={color}>
        {name}
      </Text>
      <Text as={'span'} textColor={color}>: {value}</Text>
    </Button>
  );
};

export default withMargin<StatusProps>(Status);
