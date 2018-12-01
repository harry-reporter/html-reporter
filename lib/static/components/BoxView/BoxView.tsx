import * as React from 'react';

import { IBoxView } from './types';

export const BoxView: React.SFC<IBoxView> = ({ className }) => <div className={className}>text</div>;
