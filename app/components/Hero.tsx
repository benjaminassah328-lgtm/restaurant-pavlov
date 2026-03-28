"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      
     
      <Image
        src="/images/Hero1.png"
        alt="Restaurant - image principale"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-white text-3xl md:text-5xl font-raleway mb-4 ">
          Chaque plat raconte une histoire.
        </h1>

        <p className="text-gray-200 max-w-xl mb-6 font-lora font-bold ">
          Découvrez des plats savoureux préparés avec passion. 
          Une expérience culinaire unique vous attend.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition font-orbitron">
          Commander ici
        </button>

      </div>
    </section>
  );
}