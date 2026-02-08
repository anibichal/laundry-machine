import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScreenWrapper from "../components/ScreenWrapper.jsx";
import ButtonLavado from "../components/ButtonLavado.jsx";
import ButtonSecado from "../components/ButtonSecado.jsx";
import ButtonLavadoSecado from "../components/ButtonLavadoSecado.jsx";
import ButtonSi from "../components/ButtonSi.jsx";
import ButtonNo from "../components/ButtonNo.jsx";
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
  // Caso especial: si elige Secado, no preguntar suavizante
  if (tipoServicio === "Secado") {
    handleSoftenerSelect(false, tipoServicio);
    return;
  }

  // Para Lavado y Ambos sí preguntamos suavizante
  setServicio(tipoServicio);
};

const handleSoftenerSelect = (suavizante, servicioOverride = null) => {
  const servicioFinal = servicioOverride ?? servicio;
  const basePrice = SERVICE_PRICE_MAP[servicioFinal];

  const total =
    basePrice + (suavizante ? uiConfig.prices.suavizante : 0);

  navigate("/pago", {
    state: {
      servicio: servicioFinal,
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
              <ButtonLavado onClick={() => handleServiceSelect("Lavado")} />
              <h1 className="qty-price">${uiConfig.prices.lavado}</h1>
            </div>

            <div className="qty-item">
              <ButtonSecado onClick={() => handleServiceSelect("Secado")} />
              <h1 className="qty-price">${uiConfig.prices.secado}</h1>
            </div>

            <div className="qty-item">
              <ButtonLavadoSecado onClick={() => handleServiceSelect("Ambos")} />
              <h1 className="qty-price">${uiConfig.prices.ambos}</h1>
            </div>
          </>
        )}

        {/* PASO 2: SUAVIZANTE */}
        {servicio && (
          <>
            <div className="qty-item">
              <ButtonSi onClick={() => handleSoftenerSelect(true)} />
            </div>

            <div className="qty-item">
              <ButtonNo onClick={() => handleSoftenerSelect(false)} />
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
















