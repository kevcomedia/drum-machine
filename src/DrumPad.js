import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';

function DrumPad(props) {
  const audioRef = createRef();

  const activate = () => {
    playAudio(audioRef.current);
  };

  useKeyDown(props.label, activate);

  return (
    <>
      <button className="drum-pad" onClick={activate}>
        {props.label}
      </button>
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
  audioName: PropTypes.string.isRequired,
};

function playAudio(audioElem) {
  audioElem.currentTime = 0;
  audioElem.play();
}

function useKeyDown(key, callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === key.charCodeAt()) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
}

export default DrumPad;
