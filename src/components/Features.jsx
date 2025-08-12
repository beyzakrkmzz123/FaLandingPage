import React from "react";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();
  return (
    <div
      className="bg-gray-100 py-20 px-6 text-center select-none"
      id="features"
    >
      <div className="text-3xl font-bold mb-10 relative inline-block">
        {t("Öne Çıkan Özellikler")}
        <div className="h-1 w-16 bg-indigo-600 rounded mt-2 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
          <div className="text-indigo-600 text-4xl mb-4">🔮</div>
          <div className="font-semibold mb-3 text-lg">
            {t("Gerçek Falcılar")}
          </div>
          <div className="text-gray-600 text-sm leading-relaxed">
            {t("Alanında deneyimli yorumcular ile kişisel fallar.")}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
          <div className="text-indigo-600 text-4xl mb-4">📳</div>
          <div className="font-semibold mb-3 text-lg">
            {t("Anlık Bildirim")}
          </div>
          <div className="text-gray-600 text-sm leading-relaxed">
            {t("Falın hazır olduğunda telefonuna bildirim gelir.")}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
          <div className="text-indigo-600 text-4xl mb-4">☕️</div>
          <div className="font-semibold mb-3 text-lg">{t("Geçmiş Fallar")}</div>
          <div className="text-gray-600 text-sm leading-relaxed">
            {t("Önceki fallarını tekrar oku, kaybetme.")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
