'use client';

import { signOut, useSession } from "next-auth/react";

import VaillantLogo from "@/components/logos/Vaillant-logo";
import Link from "next/link";
import LoginButton from "@/components/inputs/Login-button";

const Navbar = () => {
  const { data: session, status } = useSession();
  const linkClassName = "";

  return (
    <header className="flex justify-between  flex-wrap flex- h-20 w-full border border-b-2 border-gray-300">
      <Link href="/" className="flex h-12 p-4">
        <VaillantLogo className="w-12 h-12" />
        <span className="text-5xl text-blue-800">Vaillant</span>
      </Link>
      <nav className="flex font-sans items-center font-bold text-xl gap-8">
        <span className={linkClassName}>
          <Link href="/app">
            App
          </Link>
        </span>
        <span className={linkClassName}>
          <Link href="/blog">
            Blog
          </Link>
        </span>
        <span className={linkClassName}>
          <Link href="/doc">
            Documentation
          </Link>
        </span>
      </nav>
      <div className="flex font-sans h-12 p-4">
        <div className="flex p-4 gap-4">
          <button onClick={ () => signOut() }>
            Log out
          </button>
          <span>{ status }</span>
        </div>
        <LoginButton />
      </div>
    </header>
  );
};

export default Navbar;