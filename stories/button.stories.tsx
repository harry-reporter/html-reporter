import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/ui/Button';

// @ts-ignore
storiesOf('Button', module)
  .add('Пример кнопочки', () => (
    <Button>Кнопочка</Button>
  ));
