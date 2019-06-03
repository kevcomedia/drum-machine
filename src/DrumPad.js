import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.css';

function DrumPad(props) {
  const audioRef = createRef();

  const handleActivate = () => {
    playAudio(audioRef.current);
    props.onActivate(props.audioName);
  };

  useKeyDown(props.label, handleActivate);

  return (
    <>
      <button className="drum-pad" onClick={handleActivate}>
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
