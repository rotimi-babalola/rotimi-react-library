import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../components/Form';

storiesOf('Form', module).add('default', () => (
  <div style={{ width: '500px' }}>
    <Form />
  </div>
));
