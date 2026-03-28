import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* LOGO CENTRÉ */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/images/Logo.jpeg"
              alt="logo"
              width={120}
              height={60}
              className="w-28 md:w-32 h-auto object-contain"
            />
          </Link>
        </div>

        {/* CONTENU */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

          {/* HORAIRES */}
          <div className="max-w-xs text-center md:text-left">
            <h3 className="bg-yellow-500 text-black px-4 py-1 text-lg md:text-xl font-semibold mb-4 inline-block">
              - HORAIRES -
            </h3>

            <div className="space-y-2 text-base md:text-lg text-gray-300 leading-tight">
              <p>
                <span className="text-white">Lundi - Jeudi</span><br />
                11:30 – 14:30<br />
                17:30 – 21:30
              </p>

              <p>
                <span className="text-white">Vendredi - Samedi</span><br />
                17:30 – 22:00
              </p>

              <p>
                <span className="text-white">Dimanche</span><br />
                17:00 – 21:00
              </p>
            </div>

            <button className="mt-5 bg-yellow-500 text-black px-6 py-2 rounded-full text-xs font-semibold hover:bg-yellow-400 transition">
              COMMANDER
            </button>
          </div>

          {/* CONTACT */}
          <div className="max-w-xs text-center md:text-left">
            <h3 className="bg-yellow-500 text-black px-4 py-1 text-lg md:text-xl font-semibold mb-4 inline-block">
              - CONTACT -
            </h3>

            <div className="space-y-3 text-base md:text-lg text-gray-300">

              <div className="flex items-center md:items-start justify-center md:justify-start gap-2">
                <FiMapPin className="text-yellow-500 mt-1 text-sm" />
                <p>
                  Riviera M’Badon,<br />
                  carrefour ferme
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <FiPhone className="text-yellow-500 text-lg" />
                <p>+225 0700071111</p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <FiMail className="text-yellow-500 text-lg" />
                <p>benjaminassah@gmail.com</p>
              </div>
            </div>

            {/* RESEAUX */}
            <div className="flex justify-center md:justify-start gap-4 mt-5 text-yellow-500 text-lg">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* BAS FOOTER */}
        <div className="mt-10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base text-gray-400">
          <p className="font-bold font-lora text-center md:text-left">
            © 2026 Bon Sens
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-yellow-500">
            <a href="#">Accueil</a>
            <a href="#">Menu</a>
            <a href="#">A propos</a>
          </div>
        </div>

      </div>
    </footer>
  );
}