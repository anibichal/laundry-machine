import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import StartScreen from './screens/StartScreen.jsx'
import LaundryServiceScreen from './screens/LaundryServiceScreen.jsx'
import PagoScreen from './screens/PagoScreen.jsx'
import LaundryReadyScreen from './screens/LaundryReadyScreen.jsx'
import WashingScreen from './screens/WashingScreen.jsx'
import ThanksScreen from './screens/ThanksScreen.jsx'
import ErrorScreen from './screens/ErrorScreen.jsx'
import { preloadSounds } from "./utils/AudioManager.js";
import './index.css'

export default function App() {

  useEffect(() => {
    preloadSounds(); // precarga todos los audios una sola vez
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/laundryService" element={<LaundryServiceScreen />} />
        <Route path="/pago" element={<PagoScreen />} />
        <Route path="/laundryReady" element={<LaundryReadyScreen />} />
        <Route path="/washing" element={<WashingScreen />} />
        <Route path="/thanks" element={<ThanksScreen />} />
        <Route path="/error" element={<ErrorScreen />} />
      </Routes>
    </HashRouter>
  )
}


