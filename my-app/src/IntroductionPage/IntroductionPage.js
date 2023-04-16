import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {setIsRoomHost} from "../store/actions"
import "./IntroductionPage.css"
import logo from "../resources/images/meet-time-logo.png"
import ConnectingButtons from './ConnectingButtons'

const IntroductionPage = ({setIsRoomHostAction}) => {

  useEffect(()=>{
    setIsRoomHostAction(false)
  },[])

  return (
    <div className='introduction_page_container'>
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image" />
        <ConnectingButtons/>
      </div>
    </div>
  )
}

const mapActionsToProps = (dispatch)=>{
  return {
    setIsRoomHostAction: (isRoomHost)=> dispatch(setIsRoomHost(isRoomHost))
  }
}

export default connect(null,mapActionsToProps)(IntroductionPage)