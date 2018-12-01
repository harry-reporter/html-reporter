import * as React from 'react';

import Octicon, { Check, X } from '@githubprimer/octicons-react';
import { withMargin } from 'src/components/hoc/withMargin';

interface StatusIconProps {
  isFail: boolean;
  className?: string;
}

const StatusIcon: React.SFC<StatusIconProps> = ({ isFail, className }) => {
  const Icon: any = isFail ? X : Check;

  return (
    <span className={className}>
      <Octicon icon={Icon} />
    </span>
  );
};

export default withMargin<StatusIconProps>(StatusIcon);
