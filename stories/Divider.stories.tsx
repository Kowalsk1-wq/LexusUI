import React from 'react';
import { storiesOf } from '@storybook/react';

import { Divider } from '../src';

storiesOf('Divider', module).add('Default', () => (
  <div
    style={{
      width: '300px',
      padding: '20px 10px',
      backgroundColor: '#000',
    }}
  >
    <Divider />
  </div>
));
