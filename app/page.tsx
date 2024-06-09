"use client"
import { useSession } from 'next-auth/react';
import Hero from "./components/Hero";
import { PlaceholdersAndVanishInputDemo } from './components/PlaceholdersAndVanishInputDemo';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      {!session ? <Hero /> : <PlaceholdersAndVanishInputDemo/>}


    </main>
  );
}
