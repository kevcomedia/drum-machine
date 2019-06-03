import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.css';

function DrumPad(props) {
  const [isActive, setIsActive] = useIsActive();
  const audioRef = useRef(null);

  const handleActivate = () => {
    playAudio(audioRef.current);
    props.onActivate(props.audioName);
    setIsActive(true);
  };

  useKeyDown(props.label, handleActivate);

  return (
    <>
      <button
        className={isActive ? 'drum-pad drum-pad_active' : 'drum-pad'}
        onClick={handleActivate}
      >
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

function useIsActive() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsActive(false);
    }, 100);
    return () => clearTimeout(id);
  }, [isActive]);

  return [isActive, setIsActive];
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
