import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";

export default function () {
  return (
    <div className="h-screen flex flex-col">
      <nav className="w-full p-4">
        <div className="p-4 m-auto flex items-center justify-between">
          <Logo />
          <div>
            <Link
              className="btn btn-primary rounded-full"
              href={"/login"}
            >
              Se connecter
            </Link>
          </div>
        </div>
      </nav>
      <main className="grid grid-cols-2 flex-grow">
        <div className="max-w-5xl m-auto flex flex-col justify-center p-4">
          <h1 className="text-8xl font-bold border-white border-b-2 pb-10">
            📚 La plateforme collaborative pour tous vos cours
          </h1>
          <p className="mt-10 text-3xl">
            Apprendre ensemble, réussir ensemble : le site de collaboration de cours pour les étudiants, par les étudiants
          </p>
        </div>
        <div className="p-4">
          <div className="relative h-full w-full">
            <Image
              className="object-cover rounded-3xl"
              fill
              src="/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
              alt="School"
            ></Image>
          </div>
        </div>
      </main>
    </div>
  );
}
