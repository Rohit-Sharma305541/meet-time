import React, { useState } from 'react'
import CameraButtonImg from '../../resources/images/camera.svg'
import CameraButtonImgOff from '../../resources/images/cameraOff.svg'

const CameraButton = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisbaled]= useState(false)

  const handleCameraButtonPressed = () => {
    setIsLocalVideoDisbaled(!isLocalVideoDisabled)
  }

  return (
    <div className='video_button_container'>
      <img src={isLocalVideoDisabled? CameraButtonImgOff: CameraButtonImg}
        className="video_button_image"
        onClick={handleCameraButtonPressed}
      />
    </div>
  )
}

export default CameraButton