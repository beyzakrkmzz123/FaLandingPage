import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-gradient-to-br from-purple-300 to-purple-900 text-white text-center px-4 py-24 select-none overflow-hidden">
      <div className="flex justify-center mb-10 relative z-10">
        <div className="relative w-64 h-64 rounded-full shadow-lg border-4 border-white overflow-hidden cursor-default hover:scale-110 transition-transform duration-500">
          <img
            src="https://img.tamindir.com/2020/10/473689/en-iyi-ucretsiz-kahve-fali-uygulamalari.jpg"
            alt="Kahve Falı Uygulamaları"
            className="object-cover w-full h-full scale-105 transition-transform duration-500 ease-in-out hover:scale-110"
          />
          <div className="absolute inset-0 bg-white opacity-10 rounded-full animate-pulse pointer-events-none"></div>
        </div>
      </div>

      <div className="text-5xl font-extrabold mb-3 drop-shadow-lg relative z-10">
        {t("Fala İnanma, Falsız Kalma ☕")}
      </div>
      <div className="text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md relative z-10 px-4">
        {t(
          "Kahve fincanını yükle, dakikalar içinde falın cebinde. Gerçek falcılar, yapay zekâ destekli yorumlar."
        )}
      </div>
    </div>
  );
}

export default Hero;
