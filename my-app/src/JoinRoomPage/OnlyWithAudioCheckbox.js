import React from 'react'
import CheckImg from '../resources/images/check.png'
const OnlyWithAudioCheckbox = ({ connectOnlyWithAudio, setConnectOnlyWithAudio }) => {
  const handleConnectionTypeChange = () => {
    setConnectOnlyWithAudio(!connectOnlyWithAudio)
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (<img src={CheckImg} alt="" className="checkbox_image" />)}
      </div>
      <p className="checkbox_container_paragraph">Only Audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox