'use client';

import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>WANDR</title>
        <meta name="description" content="WANDR: Wi-Fi. Aid. Nodes. Decentralized. Resilient." />
      </Head>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BE8071B0-A49B-41D1-BDD5-878B734AABA3.png"
          alt="WANDR Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-6xl font-bold text-gold drop-shadow-md">WANDR</h1>
        <p className="text-lg mt-2 text-gray-200">
          Wi-Fi. Aid. Nodes. Decentralized. Resilient.
        </p>

        <div className="mt-6">
          <ConnectWallet />
        </div>

        {/* Helium Map Embed */}
        <div className="mt-12 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://explorer.helium.com/map"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Helium Hotspot Map"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
