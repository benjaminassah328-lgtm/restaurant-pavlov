import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Products from "@/app/components/Products";
import MenuCard from "@/app/components/MenuCard"
import ImageAnim from "./components/imageanim";
import Formulaire from "./formulaire";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Products />
<MenuCard/>
<ImageAnim/>
<Formulaire/>
    <Footer /> 
    </main>
  );
}