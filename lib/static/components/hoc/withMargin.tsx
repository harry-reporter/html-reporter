import * as React from 'react';
import cn from 'classnames';

type Margin = 'mr-3';

export function withMargin<P extends { className? }>(Component: React.ComponentType<P>, margin: Margin) {
  return (props: P) => {
    const cnComponent = cn(props.className, margin);

    return <Component {...props} className={cnComponent} />;
  };
}
