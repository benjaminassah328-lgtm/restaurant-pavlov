"use client";

import Image from "next/image";

/* ✅ TYPES */
type MenuItemProps = {
  title: string;
  price: string;
};

type CircleImageProps = {
  src: string;
};

export default function MenuSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/menui.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 max-w-6xl w-full bg-[#1c1c1c]/90 backdrop-blur-md rounded-xl p-6 md:p-12 shadow-xl">

        <div className="text-center mb-10">
          <span className="bg-yellow-500 text-black px-4 py-1 text-sm font-semibold">
            - MENU -
          </span>
          <p className="text-gray-400 mt-3 italic">
            Jetez un œil aux actualités promotions alimentaires
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-white">

          <div className="space-y-6">
            <MenuItem title="Tchep au poulet ou poisson" price="1.000f / 1.200f" />
            <MenuItem title="Yassa au poulet + Attiéké ou Riz" price="1.200f" />
            <MenuItem title="Poulet braisé + Attiéké" price="1.200f" />
            <MenuItem title="Frites poulet" price="1.200f" />
          </div>

          <div className="space-y-6">
            <MenuItem title="Poulet sauté + Pomme sautée" price="1.500f" />
            <MenuItem title="Spaghetti Bolognaise" price="1.500f" />
            <MenuItem title="Soupe de poulet" price="5.000f" />
                        <MenuItem title="Soupe de poulet" price="5.000f" />

          </div>

        </div>

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <CircleImage src="/images/poulet.jpeg" />
          <CircleImage src="/images/poisson.jpeg" />
          <CircleImage src="/images/Riz-poulet.png" />
          <CircleImage src="/images/maca.png" />
        </div>

      </div>
    </section>
  );
}


function MenuItem({ title, price }: MenuItemProps) {
  return (
    <div className="border-b border-gray-600 pb-3 flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm italic">
          Attiéké ou Riz
        </p>
      </div>
      <span className="text-yellow-500 font-semibold whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}


function CircleImage({ src }: CircleImageProps) {
  return (
    <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-yellow-500">
      <Image
        src={src}
        alt="plat"
        fill
        sizes="80px"
        className="object-cover"
      />
    </div>
  );
}