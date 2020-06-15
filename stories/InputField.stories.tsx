import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MdSearch } from 'react-icons/md';

import { InputField } from '../src';

storiesOf('InputField', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <InputField
        name="digit"
        placeholder="Digite algo..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <InputField
        name="search"
        icon={<MdSearch />}
        placeholder="Pesquise Algo..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });
