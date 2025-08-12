import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const handleSignup = () => {
    if (kullaniciAdi && email && sifre) {
      alert("Üyelik başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
      navigate("/login");
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full select-none">
        <div className="text-2xl font-bold mb-6 text-center text-gray-800">
          {t("Üye Ol")}
        </div>

        <div className="flex flex-col mb-4">
          <div className="text-gray-700 mb-1 font-semibold">
            {t("Kullanıcı Adı")}
          </div>
          <div
            contentEditable
            className="border border-gray-300 rounded px-4 py-2 min-h-[38px] text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            onInput={(e) => setKullaniciAdi(e.currentTarget.textContent)}
            role="textbox"
            spellCheck="false"
          ></div>
        </div>

        <div className="flex flex-col mb-4">
          <div className="text-gray-700 mb-1 font-semibold">{t("E-posta")}</div>
          <div
            contentEditable
            className="border border-gray-300 rounded px-4 py-2 min-h-[38px] text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            onInput={(e) => setEmail(e.currentTarget.textContent)}
            role="textbox"
            spellCheck="false"
          ></div>
        </div>

        <div className="flex flex-col mb-6">
          <div className="text-gray-700 mb-1 font-semibold">{t("Şifre")}</div>
          <input
            type="password"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={sifre}
            onChange={(e) => setSifre(e.target.value)}
          />
        </div>

        <div
          onClick={handleSignup}
          className="cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded text-center select-none"
        >
          {t("Üye Ol")}
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          <div
            onClick={() => navigate("/login")}
            className="inline-block cursor-pointer text-purple-600 hover:underline select-none"
          >
            {t("Zaten üye misiniz? Giriş yapın")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
