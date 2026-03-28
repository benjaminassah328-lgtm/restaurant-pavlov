"use client";

import { useState } from "react";

export default function Formulaire() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
  const numero = "2250709294468";

  const text = `
🛒 *Nouvelle commande*

👤 Nom : ${form.nom}
📧 Email : ${form.email}
📞 Téléphone : ${form.telephone}

📝 Message :
${form.message}
  `;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");


  setForm({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
};


  return (
    <section className="bg-[#E5A33A] py-16 px-4 md:px-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* GAUCHE */}
        <div>
          <span className="bg-black text-yellow-400 px-4 py-1 text-sm font-semibold">
            - BIENVENUE -
          </span>

          <p className="mt-6 text-black leading-relaxed">
            Améliorez votre expérience culinaire en toute simplicité ! Réservez une
            table dans notre restaurant, ou une cuisine exquise rencontre une
            ambiance accueillante.
          </p>

          
          <div className="bg-black text-white mt-8 p-6 rounded-lg">
            <p className="text-xl font-semibold">+225 0708665782</p>
            <p className="text-xl font-semibold">+225 0708665782</p>
          </div>
        </div>

       
        <div className="space-y-4">

          <input
            type="text"
            name="nom"
            placeholder="Nom et prénom"
            onChange={handleChange}
            className="w-full p-3 bg-gray-200 rounded outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Mail"
            onChange={handleChange}
            className="w-full p-3 bg-gray-200 rounded outline-none"
          />

          <input
            type="text"
            name="telephone"
            placeholder="Téléphone"
            onChange={handleChange}
            className="w-full p-3 bg-gray-200 rounded outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            onChange={handleChange}
            className="w-full p-3 bg-gray-200 rounded outline-none"
          />

          
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-8 py-3 rounded-full w-full hover:bg-gray-800 transition"
          >
            ENVOYER
          </button>

        </div>
      </div>
    </section>
  );
}