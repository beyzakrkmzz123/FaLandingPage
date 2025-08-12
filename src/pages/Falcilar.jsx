import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Falcilar() {
  const { t } = useTranslation();
  const [falcilar, setFalcilar] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const falciList = data.slice(0, 10).map((item, index) => ({
          id: item.id,
          name: item.name,
          info: item.company.catchPhrase,
          image: `https://i.pravatar.cc/150?img=${index + 1}`,
        }));
        setFalcilar(falciList);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-purple-400 p-8">
      <div className="text-2xl font-bold text-center mb-8">{t("Falcılar")}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {falcilar.map((falci) => (
          <div
            key={falci.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <img
                src={falci.image}
                alt={falci.name}
                className="w-24 h-24 rounded-full border-2 border-purple-400"
              />
            </div>
            <div className="text-lg font-semibold text-center">
              {falci.name}
            </div>
            <div className="text-sm text-gray-600 text-center mt-2">
              {falci.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Falcilar;
