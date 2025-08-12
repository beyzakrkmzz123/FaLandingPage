import React from "react";
import { useTranslation } from "react-i18next";

function FalTurleri() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-purple-400 flex flex-col items-center p-8">
      <div className="text-black text-2xl font-bold mb-8">
        {t("Fal Türleri")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh94XQ2NPwrU0HFQ6WlLPttQOPaJpfhED12fCs3i_hnmuWmjNFx9aBwb4ClixXdE0Gs2gVZF3UsXil1JyHly9P48NUvcQnNg4vy9lJ3JXcxgZmUkLEMqvb02iNMNaqlG5Cf_Gteu2wmntC0/s800/kahve-fali-sozlugu.jpg"
            alt="Kahve Falı"
            className="w-full h-60 object-cover rounded-md"
          />
          <div className="text-black mt-4 text-lg font-semibold">
            {t("Kahve Falı")}
          </div>
          <div className="text-gray-600 mt-2 text-sm text-center">
            {t("Geleneksel kahve telvesinden geleceği yorumlama sanatı.")}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="https://www.uplifers.com/app/uploads/2021/07/tarot-fali.jpg"
            alt="Tarot Falı"
            className="w-full h-60 object-cover rounded-md"
          />
          <div className="text-black mt-4 text-lg font-semibold">
            {t("Tarot Falı")}
          </div>
          <div className="text-gray-600 mt-2 text-sm text-center">
            {t("Kartların sembolleri ile geleceğe dair ipuçları.")}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="https://phebus.s3.eu-north-1.amazonaws.com/products/19389/68.jpg"
            alt="Su Falı"
            className="w-full h-60 object-cover rounded-md"
          />
          <div className="text-black mt-4 text-lg font-semibold">
            {t("El Falı")}
          </div>
          <div className="text-gray-600 mt-2 text-sm text-center">
            {t("Avuç içindeki çizgilerden yaşam yolunuzu okur.")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FalTurleri;
