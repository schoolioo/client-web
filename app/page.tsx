import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";

export default function () {
  return (
    <div>
      <div className="relative h-screen w-screen">
        <nav className="absolute top-0 z-20 w-full p-4">
          <div className="max-w-7xl m-auto flex items-center justify-between">
            <Logo />
            <div>
              <Link
                className="text-white border-white border-2 p-2 rounded-full"
                href={"/login"}
              >
                Se connecter
              </Link>
            </div>
          </div>
        </nav>

        <div className="z-20 bottom-32 absolute p-4 w-full">
          <div className="max-w-7xl m-auto">
            <h1 className="text-white text-7xl font-bold border-white border-b-2 pb-10">
              La plateforme collaborative pour tous vos cours
            </h1>
            <p className="text-white mt-10 text-xl">
              Domuss credere, tanquam magnum detrius. Pol, a bene lanista,
              castus uria! Domuss credere, tanquam magnum detrius. Pol, a bene
              lanista, castus uria!
            </p>
          </div>
        </div>

        <div className="bg-black/40 h-full w-full absolute z-10"></div>

        <Image
          className="object-cover"
          fill
          src="/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
          alt="School"
        ></Image>
      </div>
    </div>
  );
}
