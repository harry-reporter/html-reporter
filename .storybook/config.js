import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import * as options from './options';

addDecorator(withOptions(options));

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
