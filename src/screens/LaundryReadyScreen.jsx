import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ScreenWrapper from '../components/ScreenWrapper.jsx'
import { uiConfig } from '../config/uiConfig.js'
import { connectBidonSocket, disconnectBidonSocket } from '../services/bidonService.js'
import ButtonStart from '../components/ButtonStart.jsx'
import { playSound } from "../utils/AudioManager.js";
import CornerLogo from "../components/CornerLogo.jsx";
import ButtonSiguiente from "../components/ButtonSiguiente.jsx";


export default function LaundryReadyScreen() {
  const { state } = useLocation()   // 👈 AQUÍ llega el objeto
  const navigate = useNavigate()
  const [status, setStatus] = useState('waiting')
  const { servicio, suavizante, total } = state
  

  useEffect(() => {
    playSound("coloqueEnvase");
  }, []);


   const handleStartButton = async () => {
      setStatus('ready')
  }


  const handleStartDefinitlyButton = async () => {
      navigate('/washing', {
        state: {
          servicio,
          suavizante,
          total
        }
      })
  }

  return (
    <ScreenWrapper>
      {status === 'waiting' ? (
        <>
          <h1 className="screen-title">{uiConfig.messages.Insert}</h1>
          <ButtonSiguiente onClick={() => handleStartButton() }/>
        </>
      ) : (
        <>
          <h1 className="screen-title">{uiConfig.messages.Ready}</h1>
          <div style={{ marginTop: 12 }}>
            <ButtonStart onClick={() => handleStartDefinitlyButton() } />
          </div>
        </>
      )}

      
       <CornerLogo />
     
    </ScreenWrapper>
  )
}




