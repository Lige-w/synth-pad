import React from 'react';
import ReactDOM from 'react-dom';
import SynthPad from './SynthPad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SynthPad />, div);
  ReactDOM.unmountComponentAtNode(div);
});
