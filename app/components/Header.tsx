"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [nbArticles, setNbArticles] = useState(0);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-md px-4 md:px-10 py-3 text-sm">
            <div className="flex items-center justify-between">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/Logo.jpeg"
                        alt="logo"
                        width={120}
                        height={60}
                        className="w-20 md:w-24 h-auto object-contain"
                    />
                </Link>

                <nav className="hidden md:flex gap-6 font-lora text-white absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="hover:text-yellow-400">Accueil</Link>
                    <Link href="/produits" className="hover:text-yellow-400">Menu</Link>
                    <Link href="/Contact" className="hover:text-yellow-400">Contact</Link>
                    <Link href="/Apropos" className="hover:text-yellow-400">A Propos</Link>
                </nav>

<div className="flex items-center gap-4">

    <Link href="/Panier" className="relative text-white hidden md:block">
        <ShoppingCart size={24} />

        {nbArticles > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5 py-0.5 rounded-full">
                {nbArticles}
            </span>
        )}
    </Link>

    {/* PANIER MOBILE */}
    <Link href="/Panier" className="relative text-white md:hidden">
        <ShoppingCart size={24} />

        {nbArticles > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5 py-0.5 rounded-full">
                {nbArticles}
            </span>
        )}
    </Link>

    {/* BOUTON MENU telephone */}
    <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
    >
        {open ? <X size={26} /> : <Menu size={26} />}
    </button>
</div>
            </div>

            {/* MENU telephone */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    open ? "max-h-100 mt-4" : "max-h-0"
                }`}
            >
                <div className="space-y-4 border-t pt-4">

                    {/* SEARCH */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-full pl-10 pr-3 py-2 border rounded-full text-sm focus:outline-none"
                        />
                    </div>

                    {/* NAV */}
                    <nav className="flex flex-col gap-3 font-lora text-white">
                        <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
                        <Link href="/produits" onClick={() => setOpen(false)}>Produits</Link>
                        <Link href="/Contact" onClick={() => setOpen(false)}>Contact</Link>
                        <Link href="/Panier" onClick={() => setOpen(false)}>Panier</Link>
                        <Link href="/Apropos" onClick={() => setOpen(false)}>A Propos</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}