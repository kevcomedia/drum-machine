import React from 'react';
import ReactDOM from 'react-dom';
import DrumPad from './DrumPad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DrumPad
      label="Q"
      audioSrc="https://sample.url/to/audio.file"
      audioName="Heater 1"
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
