import Image from "next/image";

export default function Products() {
  return (
    <section className="flex items-center justify-between bg-black text-white px-6 py-10">

      {/* Image gauche */}
      <div className="hidden md:flex justify-center w-2/4">
        <div className="w-48 h-48 relative">
          <Image
            src="/images/poulet.jpeg"
            alt="Poulet braisé"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      
      <div className="flex flex-col items-center text-center gap-4 md:w-2/4">

        
        <div className="flex items-center gap-3">
          
          <h2 className=" text-yellow-400 text-xs font-bold  font-lora uppercase tracking-widest">
            -Bienvenue-
          </h2>
          
        </div>

      
        <h1 className="font-lora text-xl md:text-3xl font-bold ">
          Attiéké, Poulet & Poisson Braisé
        </h1>
     <p className="text-gray-300 max-w-md text-xs md:text-xl font-lora font-bold ">
          Savourez notre attiéké accompagné de poulet et de poisson braisé au charbon de bois,
          préparés avec des ingrédients frais et une marinade riche en saveurs. Une cuisine
          authentique, généreuse et pleine de caractère pour satisfaire toutes vos envies.
        </p>
      </div>

    
      <div className="hidden md:flex justify-center w-2/4">
        <div className="w-48 h-48 relative">
          <Image
            src="/images/poisson.jpeg"
            alt="Poisson braisé"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>

    </section>
  );
}