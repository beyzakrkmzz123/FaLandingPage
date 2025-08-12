import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Iletisim() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-400 flex flex-col items-center justify-center px-6 py-20">
      <div className="text-3xl font-bold mb-10 text-purple-900">
        {t("İletişim Bilgilerimiz")}
      </div>

      <div className="grid gap-6 w-full max-w-2xl">
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
          <div className="bg-purple-300 p-3 rounded-full text-black">
            <FaLocationDot size={24} />
          </div>
          <div>
            <div className="font-semibold mb-1">{t("Adres")}</div>
            <div>{t("Muğla, Türkiye")}</div>
          </div>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
          <div className="bg-purple-300 p-3 rounded-full text-black">
            <FaPhone size={24} />
          </div>
          <div>
            <div className="font-semibold mb-1">{t("Telefon")}</div>
            <div>+90 535 521 8381</div>
          </div>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
          <div className="bg-purple-300 p-3 rounded-full text-black">
            <IoIosMail size={24} />
          </div>
          <div>
            <div className="font-semibold mb-1">{t("E-posta")}</div>
            <div>info@falsizkalma.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
