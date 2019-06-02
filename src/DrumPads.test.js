import React from 'react';
import ReactDOM from 'react-dom';
import DrumPads from './DrumPads';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrumPads />, div);
  ReactDOM.unmountComponentAtNode(div);
});
