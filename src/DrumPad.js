import React, { createRef } from 'react';
import PropTypes from 'prop-types';

function DrumPad(props) {
  const audioRef = createRef();

  return (
    <>
      <button className="drum-pad">{props.label}</button>
      <audio
        className="clip"
        src={props.audioSrc}
        preload="auto"
        ref={audioRef}
      />
    </>
  );
}

DrumPad.propTypes = {
  label: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
};

export default DrumPad;
