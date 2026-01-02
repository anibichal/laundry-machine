import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ScreenWrapper from '../components/ScreenWrapper.jsx'
import { uiConfig } from '../config/uiConfig.js'
import { connectBidonSocket, disconnectBidonSocket } from '../services/bidonService.js'
import ButtonStart from '../components/ButtonStart.jsx'
import { playSound } from "../utils/AudioManager.js";
import CornerLogo from "../components/CornerLogo.jsx";
import InsertBottleAnimation from "../components/InsertBottleAnimation.jsx";


export default function LaundryReadyScreen() {
  const { state } = useLocation()   // 👈 AQUÍ llega el objeto
  const navigate = useNavigate()
  const [status, setStatus] = useState('waiting')
  

  useEffect(() => {
    playSound("coloqueEnvase");
  }, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setStatus('ready')
  }, 5000)

  return () => clearTimeout(timer)
}, [])

  const { servicio, suavizante, total } = state


  const handleStartButton = async () => {
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
          <h1 className="screen-title">{uiConfig.messages.fillInsert}</h1>
          <InsertBottleAnimation />
        </>
      ) : (
        <>
          <h1 className="screen-title">{uiConfig.messages.fillReady}</h1>
          <div style={{ marginTop: 12 }}>
            <ButtonStart onClick={() => handleStartButton() } />
          </div>
        </>
      )}

      
       <CornerLogo />
     
    </ScreenWrapper>
  )
}




