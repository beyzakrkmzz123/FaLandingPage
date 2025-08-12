import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Yorumlar() {
  const { t } = useTranslation();
  const [yorumlar, setYorumlar] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=3").then(
        (res) => res.json()
      ),
    ]).then(([users, comments]) => {
      const data = comments.map((yorum, index) => {
        const user = users[index % users.length];
        return {
          id: yorum.id,
          name: user.name,
          body: yorum.body,
          stars: 3 + ((index + Math.floor(Math.random() * 3)) % 3),
        };
      });
      setYorumlar(data);
    });
  }, []);

  return (
    <div
      className="bg-gray-100 py-20 px-6 text-center select-none"
      id="yorumlar"
    >
      <div className="text-3xl font-bold mb-10 relative inline-block">
        {t("Kullanıcı Yorumları")}
        <div className="h-1 w-24 bg-indigo-600 rounded mt-2 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {yorumlar.map((yorum, index) => (
          <div
            key={yorum.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full border-2 border-indigo-500"
                style={{
                  backgroundImage: `url(https://i.pravatar.cc/150?img=${
                    index + 1
                  })`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="font-semibold mb-2">{yorum.name}</div>

            <div className="text-gray-600 text-sm mb-3">"{yorum.body}"</div>

            <div className="flex justify-center text-yellow-400 text-lg">
              {Array.from({ length: yorum.stars }).map((_, i) => (
                <div key={i}>⭐</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yorumlar;
