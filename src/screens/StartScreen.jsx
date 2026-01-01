import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScreenWrapper from '../components/ScreenWrapper.jsx'
import { uiConfig } from '../config/uiConfig.js'
import EmiLogo from "../components/EmiLogoAnimation.jsx";
import { playSound } from "../utils/AudioManager.js"; //
import CornerLogo from "../components/CornerLogo.jsx";

export default function StartScreen() {
  const navigate = useNavigate()
  
  const handleStart = () => {
    navigate('/laundryService')
    playSound("tapSound");
    
  }

  return (
    <ScreenWrapper>
      (
        <>
          <h1 className="screen-title">{uiConfig.messages.start}</h1>
          <EmiLogo onClick={handleStart} />
        </>
      )
     
      <CornerLogo />
   
      
    </ScreenWrapper>
  )
}



