import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");

  const handleLogin = () => {
    if (kullaniciAdi && sifre) {
      navigate("/");
    } else {
      alert("Lütfen kullanıcı adı ve şifre girin");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-700 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full select-none">
        <div className="text-2xl font-bold mb-6 text-center text-gray-800">
          {t("Giriş Yap")}
        </div>

        <div className="flex flex-col mb-6">
          <div className="text-gray-700 mb-1 font-semibold">
            {t("Kullanıcı Adı")}
          </div>
          <div
            contentEditable
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[38px] text-black"
            onInput={(e) => setKullaniciAdi(e.currentTarget.textContent)}
            role="textbox"
            spellCheck="false"
          ></div>
        </div>

        <div className="flex flex-col mb-6">
          <div className="text-gray-700 mb-1 font-semibold">{t("Şifre")}</div>
          <input
            type="password"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            onChange={(e) => setSifre(e.target.value)}
          />
        </div>

        <div
          onClick={handleLogin}
          className="cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded text-center select-none"
        >
          {t("Giriş Yap")}
        </div>
      </div>
    </div>
  );
}

export default Login;
