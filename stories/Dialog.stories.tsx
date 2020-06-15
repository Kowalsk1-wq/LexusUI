import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Dialog, Button } from '../src';

storiesOf('Dialog', module).add('Test Dialog', () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>

      <Dialog title="Dialog Title" open={open} setOpen={setOpen}>
        Test
      </Dialog>
    </>
  );
});
