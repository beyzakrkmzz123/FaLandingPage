import React from "react";
import { useTranslation } from "react-i18next";

function Hakkimizda() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-400 flex flex-col items-center justify-center px-6 py-20">
      <div className="text-4xl font-bold mb-8 text-purple-900">
        {t("Falsız Kalma - Hakkımızda")}
      </div>

      <div className="max-w-4xl w-full p-12 rounded-lg text-black bg-gradient-to-b from-purple-400 via-purple-200 to-white shadow-lg">
        <div className="text-lg leading-relaxed">
          {t(
            "Falsız Kalma, fal dünyasında güvenilir ve hızlı rehberiniz olmak için tasarlanmış yenilikçi bir uygulamadır. Kullanıcılarımıza doğru ve samimi fal deneyimi sunarken, alanında uzman falcıları bir araya getirir ve çeşitli fal türleri hakkında detaylı bilgi sağlar. Amacımız, herkesin hayatına biraz daha umut, keyif ve rehberlik katmaktır."
          )}
        </div>
        <div className="text-lg leading-relaxed mt-6">
          {t(
            "Platformumuzda kolayca falcılarla iletişim kurabilir, yorumları okuyabilir ve farklı fal türlerini deneyimleyebilirsiniz. Kullanıcı dostu arayüzümüz ve güvenli sistemimiz ile Falsız Kalma, fal bakmak isteyenlerin ilk tercihi olmayı hedeflemektedir."
          )}
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
