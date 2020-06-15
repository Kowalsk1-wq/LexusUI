import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Outlined', () => <Button outlined>Outlined</Button>)
  .add('Disabled', () => <Button disabled>Disabled</Button>)
  .add('Custom CSS', () => <Button backgroundColor="#00C9B7">Custom CSS</Button>)
  .add('Dark Mode', () => <Button dark>Dark Mode</Button>);
