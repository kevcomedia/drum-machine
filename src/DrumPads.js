import React from 'react';
import DrumPad from './DrumPad';
import audioMap from './audioMap';

// This ordering of the labels is important, so I'm hardcoding this array
// instead of using `Object.keys` on `audioMap`.
const labels = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

function DrumPads(props) {
  return (
    <div className="drum-pads">
      {labels.map((label) => (
        <DrumPad
          key={label}
          label={label}
          audioSrc={audioMap[label][0]}
          audioName={audioMap[label][1]}
        />
      ))}
    </div>
  );
}

export default DrumPads;
