import { Categorie, categorieList } from "./categorie";

export interface Menu {
    id: number;
    nom: string;
    prix: number;
    image: string;
    categorie: Categorie;
    description: string;
    
}

export const produits: Menu[] = [

    { id: 1, nom: "Attiéké Poisson Braisé",description:"je suis là", prix: 1200, image: "/images/attiéké-poisson-braisé.png", categorie: categorieList[0] },
    { id: 2, nom: "Attiéké Poisson",description:"je suis là", prix: 1200, image: "/images/attiéké-poisson.png", categorie: categorieList[0] },
    { id: 3, nom: "Attiéké Poulet",description:"je suis là", prix: 10000, image: "/images/attiéké-poulet.png", categorie: categorieList[0] },

    
];