"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* TYPE */
type Product = {
  id: number;
  img: string;
};

const products: Product[] = [
  { id: 1, img: "/images/attiéké-poisson-braisé.png" },
  { id: 2, img: "/images/attiéké-poisson.png" },
  { id: 3, img: "/images/attiéké-poulet-braisé.png" },
  { id: 4, img: "/images/poisson.jpeg" },
  { id: 5, img: "/images/poulet.jpeg" },
  { id: 6, img: "/images/Riz-poulet.png" },
  { id: 7, img: "/images/Tchep-poulet.png" },
  { id: 8, img: "/images/maca.png" },
  { id: 7, img: "/images/Tchepoisson.png" },
  { id: 8, img: "/images/yassa-poulet.png" },
];

export default function ImageAnim() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-linear-to-b from-black via-black to-black py-14 px-4 overflow-hidden">

     

      <motion.div
        className="flex gap-4 md:gap-6 w-max"
        animate={{ x: [0, -2000] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...products, ...products].map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            onClick={() => setSelected(product.img)}
            className="cursor-pointer min-w-45 sm:min-w-50 md:min-w-60 bg-black rounded-2xl p-3"
          >
            <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden rounded-xl">
              <Image
                src={product.img}
                alt={`Produit ${product.id}`}
                fill
                sizes="(max-width: 768px) 200px, 240px"
                className="object-cover hover:scale-110 transition duration-300"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] max-w-3xl h-100 md:h-125"
            >
              <Image
                src={selected}
                alt="image agrandie"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}