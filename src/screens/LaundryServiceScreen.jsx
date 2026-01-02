import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScreenWrapper from "../components/ScreenWrapper.jsx";
import ButtonOne from "../components/ButtonOne.jsx";
import ButtonTwo from "../components/ButtonTwo.jsx";
import ButtonThree from "../components/ButtonThree.jsx";
import ButtonFour from "../components/ButtonFour.jsx";
import ButtonFive from "../components/ButtonFive.jsx";
import { uiConfig } from "../config/uiConfig.js";
import { playSound } from "../utils/AudioManager.js";
import CornerLogo from "../components/CornerLogo.jsx";
import { Home } from "lucide-react";

export default function LaundryServiceScreen() {
  const navigate = useNavigate();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    playSound("seleccionarCantidad");
  }, []);

  // 👉 Mapea servicio → precio base
  const SERVICE_PRICE_MAP = {
    Lavado: uiConfig.prices.lavado,
    Secado: uiConfig.prices.secado,
    Ambos: uiConfig.prices.ambos,
  };

  const handleServiceSelect = (tipoServicio) => {
    setServicio(tipoServicio);
    //playSound("confirmar"); // opcional
  };

  const handleSoftenerSelect = (suavizante) => {
    const basePrice = SERVICE_PRICE_MAP[servicio];
    const total =
      basePrice + (suavizante ? uiConfig.prices.suavizante : 0);

    navigate("/pago", {
      state: {
        servicio,
        suavizante,
        total,
      },
    });
  };

  return (
    <ScreenWrapper>
      <h1 className="screen-title">
        {!servicio
          ? uiConfig.messages.serviceType
          : uiConfig.messages.softer(uiConfig.prices)}
      </h1>

      <div className="qty-row">
        {/* PASO 1: SELECCIÓN DE SERVICIO */}
        {!servicio && (
          <>
            <div className="qty-item">
              <ButtonOne onClick={() => handleServiceSelect("Lavado")} />
              <h1 className="qty-price">${uiConfig.prices.lavado}</h1>
            </div>

            <div className="qty-item">
              <ButtonTwo onClick={() => handleServiceSelect("Secado")} />
              <h1 className="qty-price">${uiConfig.prices.secado}</h1>
            </div>

            <div className="qty-item">
              <ButtonThree onClick={() => handleServiceSelect("Ambos")} />
              <h1 className="qty-price">${uiConfig.prices.ambos}</h1>
            </div>
          </>
        )}

        {/* PASO 2: SUAVIZANTE */}
        {servicio && (
          <>
            <div className="qty-item">
              <ButtonFour onClick={() => handleSoftenerSelect(false)} />
            </div>

            <div className="qty-item">
              <ButtonFive onClick={() => handleSoftenerSelect(true)} />
            </div>
          </>
        )}
      </div>

      <button
        className="home-button"
        onClick={() => navigate("/")}
        aria-label="Ir a inicio"
      >
        <Home size={40} />
      </button>

      <CornerLogo />
    </ScreenWrapper>
  );
}
















