import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../components/Input';

storiesOf('Input', module)
  .add('Text Input', () => (
    <div style={{ width: '500px' }}>
      <Input name="input" type="text" isRequired />
    </div>
  ))
  .add('With placeholder', () => (
    <div style={{ width: '500px' }}>
      <Input
        name="input"
        type="text"
        isRequired
        placeholder="Type something..."
        onChange={action('onChange')}
      />
    </div>
  ))
  .add('Password', () => (
    <div style={{ width: '500px' }}>
      <Input
        name="input"
        type="password"
        isRequired
        placeholder="Enter password"
        onChange={action('onChange')}
      />
    </div>
  ));
