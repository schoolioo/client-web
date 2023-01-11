import Image from "next/image";
import { Logo } from "../logo";
import Link from "next/link";
import {NextPage, NextPageContext} from "next";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-200">
      <div className="h-56 relative">
        <div className="p-4 m-auto flex items-center justify-between">
          <Logo className="fill-white h-9 z-10" />

          <div className="avatar placeholder z-10">
            <div className="bg-white text-base-content rounded-full w-12">
              <span>M</span>
            </div>
          </div>
        </div>
        <Image
          className="object-cover"
          fill
          src="/rennes1.webp"
          alt="Université de Rennes 1"
        ></Image>
      </div>

      <div className="backdrop-blur-lg bg-white/50 p-6 rounded-xl -mt-24 space-y-6 max-w-5xl mx-auto shadow">
        <h1 className="font-bold text-3xl">Université de Rennes 1</h1>
        <div className="grid grid-cols-3">
          <div className="space-y-2">
            <h2 className="text-neutral/80 text-lg font-bold">
              🧑‍🎓 Étudiants sur Schooliu
            </h2>
            <h3 className="text-4xl font-bold">210</h3>
          </div>

          <div className="space-y-2">
            <h2 className="text-neutral/80 text-lg font-bold">
              📚 Nombre de matières
            </h2>
            <h3 className="text-4xl font-bold">15</h3>
          </div>

          <div className="space-y-2">
            <h2 className="text-neutral/80 text-lg font-bold">
              📝 Nombre de fiche
            </h2>
            <h3 className="text-4xl font-bold">167</h3>
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 rounded-xl max-w-5xl mx-auto bg-white shadow">{children}</div>
    </div>
  );
}
