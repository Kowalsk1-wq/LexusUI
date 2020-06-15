import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { RadioButton } from '../src';

storiesOf('RadioButton', module)
  .add('Radio Group', () => {
    const options = [
      { id: 1, value: 'Alpha' },
      { id: 2, value: 'Beta' },
    ];

    const [option, setOption] = useState(options[1].id);

    return (
      <form>
        {options.map((item) => (
          <RadioButton
            name="radio"
            key={item.id}
            label={item.value}
            value={item.value}
            checked={option === item.id}
            onChange={() => setOption(Number(item.id))}
          />
        ))}
      </form>
    );
  })
  .add('Checked Radio', () => (
    <RadioButton
      label="Checked"
      value="Checked"
      name="radio"
      defaultChecked={true}
      readOnly
    />
  ))
  .add('Unchecked Radio', () => (
    <RadioButton
      label="Unchecked"
      value="Unchecked"
      name="radio"
      checked={false}
      readOnly
    />
  ));
