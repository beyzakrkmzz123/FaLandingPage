import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      "Ana Sayfa": "Ana Sayfa",
      Falcılar: "Falcılar",
      "Fal Türleri": "Fal Türleri",
      Hakkımızda: "Hakkımızda",
      İletişim: "İletişim",
      "Giriş Yap": "Giriş Yap",
      "Üye Ol": "Üye Ol",
      "Fala İnanma, Falsız Kalma ☕": "Fala İnanma, Falsız Kalma ☕",
      "Kahve fincanını yükle, dakikalar içinde falın cebinde. Gerçek falcılar, yapay zekâ destekli yorumlar.":
        "Kahve fincanını yükle, dakikalar içinde falın cebinde. Gerçek falcılar, yapay zekâ destekli yorumlar.",
      "Öne Çıkan Özellikler": "Öne Çıkan Özellikler",
      "Gerçek Falcılar": "Gerçek Falcılar",
      "Alanında deneyimli yorumcular ile kişisel fallar.":
        "Alanında deneyimli yorumcular ile kişisel fallar.",
      "Anlık Bildirim": "Anlık Bildirim",
      "Falın hazır olduğunda telefonuna bildirim gelir.":
        "Falın hazır olduğunda telefonuna bildirim gelir.",
      "Geçmiş Fallar": "Geçmiş Fallar",
      "Önceki fallarını tekrar oku, kaybetme.":
        "Önceki fallarını tekrar oku, kaybetme.",
      "© 2025 Falsız Kalma. Tüm hakları saklıdır.":
        "© 2025 Falsız Kalma. Tüm hakları saklıdır.",
      "Uygulamayı Hemen İndir": "Uygulamayı Hemen İndir",
      "Kullanıcı Yorumları": "Kullanıcı Yorumları",
      "Fal Türleri": "Fal Türleri",
      "Kahve Falı": "Kahve Falı",
      "Tarot Falı": "Tarot Falı",
      "El Falı": "El Falı",
      "Geleneksel kahve telvesinden geleceği yorumlama sanatı.":
        "Geleneksel kahve telvesinden geleceği yorumlama sanatı.",
      "Kartların sembolleri ile geleceğe dair ipuçları.":
        "Kartların sembolleri ile geleceğe dair ipuçları.",
      "Avuç içindeki çizgilerden yaşam yolunuzu okur.":
        "Avuç içindeki çizgilerden yaşam yolunuzu okur.",
      "Falsız Kalma - Hakkımızda": "Falsız Kalma - Hakkımızda",
      "Falsız Kalma, fal dünyasında güvenilir ve hızlı rehberiniz olmak için tasarlanmış yenilikçi bir uygulamadır. Kullanıcılarımıza doğru ve samimi fal deneyimi sunarken, alanında uzman falcıları bir araya getirir ve çeşitli fal türleri hakkında detaylı bilgi sağlar. Amacımız, herkesin hayatına biraz daha umut, keyif ve rehberlik katmaktır.":
        "Falsız Kalma, fal dünyasında güvenilir ve hızlı rehberiniz olmak için tasarlanmış yenilikçi bir uygulamadır. Kullanıcılarımıza doğru ve samimi fal deneyimi sunarken, alanında uzman falcıları bir araya getirir ve çeşitli fal türleri hakkında detaylı bilgi sağlar. Amacımız, herkesin hayatına biraz daha umut, keyif ve rehberlik katmaktır.",
      "Platformumuzda kolayca falcılarla iletişim kurabilir, yorumları okuyabilir ve farklı fal türlerini deneyimleyebilirsiniz. Kullanıcı dostu arayüzümüz ve güvenli sistemimiz ile Falsız Kalma, fal bakmak isteyenlerin ilk tercihi olmayı hedeflemektedir.":
        "Platformumuzda kolayca falcılarla iletişim kurabilir, yorumları okuyabilir ve farklı fal türlerini deneyimleyebilirsiniz. Kullanıcı dostu arayüzümüz ve güvenli sistemimiz ile Falsız Kalma, fal bakmak isteyenlerin ilk tercihi olmayı hedeflemektedir.",
      "İletişim Bilgilerimiz": "İletişim Bilgilerimiz",
      Adres: "Adres",
      "Muğla, Türkiye": "Muğla, Türkiye",
      Telefon: "Telefon",
      "E-posta": "E-posta",
      "Kullanıcı Adı": "Kullanıcı Adı",
      Şifre: "Şifre",
      "Lütfen kullanıcı adı ve şifre girin":
        "Lütfen kullanıcı adı ve şifre girin",
      "Lütfen tüm alanları doldurun.": "Lütfen tüm alanları doldurun.",
      "Üyelik başarılı! Giriş sayfasına yönlendiriliyorsunuz.":
        "Üyelik başarılı! Giriş sayfasına yönlendiriliyorsunuz.",
      "Zaten üye misiniz? Giriş yapın": "Zaten üye misiniz? Giriş yapın",
      "Şifrenizi girin": "Şifrenizi girin",
      Dil: "Dil",
    },
  },
  en: {
    translation: {
      "Ana Sayfa": "Home",
      Falcılar: "Fortune Tellers",
      "Fal Türleri": "Fortune Types",
      Hakkımızda: "About Us",
      İletişim: "Contact",
      "Giriş Yap": "Login",
      "Üye Ol": "Sign Up",
      "Fala İnanma, Falsız Kalma ☕":
        "Don’t Believe in Fortune, Don’t Be Without One ☕",
      "Kahve fincanını yükle, dakikalar içinde falın cebinde. Gerçek falcılar, yapay zekâ destekli yorumlar.":
        "Upload your coffee cup, your fortune is in your pocket within minutes. Real fortune tellers, AI-supported comments.",
      "Öne Çıkan Özellikler": "Featured Features",
      "Gerçek Falcılar": "Real Fortune Tellers",
      "Alanında deneyimli yorumcular ile kişisel fallar.":
        "Personal fortunes with experienced commentators in the field.",
      "Anlık Bildirim": "Instant Notification",
      "Falın hazır olduğunda telefonuna bildirim gelir.":
        "You receive a notification on your phone when your fortune is ready.",
      "Geçmiş Fallar": "Past Fortunes",
      "Önceki fallarını tekrar oku, kaybetme.":
        "Read your previous fortunes again, don’t lose them.",
      "© 2025 Falsız Kalma. Tüm hakları saklıdır.":
        "© 2025 Falsız Kalma. All rights reserved.",
      "Uygulamayı Hemen İndir": "Download The App Now",
      "Kullanıcı Yorumları": "User Reviews",
      "Fal Türleri": "Fortune Types",
      "Kahve Falı": "Coffee Fortune",
      "Tarot Falı": "Tarot Reading",
      "El Falı": "Palm Reading",
      "Geleneksel kahve telvesinden geleceği yorumlama sanatı.":
        "The traditional art of interpreting the future from coffee grounds.",
      "Kartların sembolleri ile geleceğe dair ipuçları.":
        "Clues to the future with the symbols of the cards.",
      "Avuç içindeki çizgilerden yaşam yolunuzu okur.":
        "It reads your life path from the lines on your palm.",
      "Falsız Kalma - Hakkımızda": "Falsız Kalma - About Us",
      "Falsız Kalma, fal dünyasında güvenilir ve hızlı rehberiniz olmak için tasarlanmış yenilikçi bir uygulamadır. Kullanıcılarımıza doğru ve samimi fal deneyimi sunarken, alanında uzman falcıları bir araya getirir ve çeşitli fal türleri hakkında detaylı bilgi sağlar. Amacımız, herkesin hayatına biraz daha umut, keyif ve rehberlik katmaktır.":
        "Falsız Kalma is an innovative app designed to be your reliable and fast guide in the world of fortune telling. While providing our users with accurate and sincere fortune experiences, it brings together expert fortune tellers and offers detailed information about various types of fortunes. Our goal is to add a little more hope, joy, and guidance to everyone’s life.",
      "Platformumuzda kolayca falcılarla iletişim kurabilir, yorumları okuyabilir ve farklı fal türlerini deneyimleyebilirsiniz. Kullanıcı dostu arayüzümüz ve güvenli sistemimiz ile Falsız Kalma, fal bakmak isteyenlerin ilk tercihi olmayı hedeflemektedir.":
        "On our platform, you can easily contact fortune tellers, read comments, and experience different fortune types. With our user-friendly interface and secure system, Falsız Kalma aims to be the first choice for those who want to get a fortune reading.",
      "İletişim Bilgilerimiz": "Our Contact Information",
      Adres: "Address",
      "Muğla, Türkiye": "Muğla, Turkey",
      Telefon: "Phone",
      "E-posta": "E-mail",
      "Kullanıcı Adı": "Username",
      Şifre: "Password",
      "Lütfen kullanıcı adı ve şifre girin":
        "Please enter username and password",
      "Lütfen tüm alanları doldurun.": "Please fill all fields.",
      "Üyelik başarılı! Giriş sayfasına yönlendiriliyorsunuz.":
        "Sign up successful! Redirecting to login page.",
      "Zaten üye misiniz? Giriş yapın": "Already a member? Log in",
      "Şifrenizi girin": "Enter your password",
      Dil: "Language",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
