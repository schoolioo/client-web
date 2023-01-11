import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ({ params }: { params: { university: string } }) {
  const subjects = [
    {
      name: "Mathématiques",
      description:
        "Les mathématiques sont l'ensemble des connaissances acquises par l'homme sur les nombres, les formes, les espaces, les structures, les transformations et les relations qui les lient.",
      slug: "mathematiques",
      image: "/subjects/math.jpg",
    },
    {
      name: "Physique",
      description:
        "La physique est la science qui étudie la matière et l'énergie, et leurs interactions entre elles.",
      slug: "physique",
      image: "/subjects/physics.jpg",
    },
    {
      name: "Chimie",
      description:
        "La chimie est la science qui étudie la matière et ses transformations.",
      slug: "chimie",
      image: "/subjects/chemistry.jpg",
    },
    {
      name: "Informatique",
      description:
        "L'informatique est la science qui étudie les principes et les méthodes de traitement de l'information par l'ordinateur.",
      slug: "informatique",
      image: "/subjects/computer-science.jpg",
    },
  ];

  const workButtonName = [
    "Travailler",
    "Je me lance",
    "Je m'y mets",
    "J'ai un examen demain",
    "C'est parti",
    "Allons-y",
    "Au boulot",
    "Let's do it",
    "Let's get started",
    "Let's begin",
    "Let's go",
    "On y va",
    "Je commence",
    "Je m'attelle à la tâche",
    "Je me plonge dans le travail",
    "Je me met au travail",
    "J'entame la journée",
    "J'entame la tâche",
  ];

  function randomWorkButtonName() {
    return workButtonName[Math.floor(Math.random() * workButtonName.length)];
  }

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-3xl">📚 Matières</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <div className="card w-full bg-base-100 shadow-xl image-full overflow-hidden">
            <Image
              className="object-cover"
              fill
              src={subject.image}
              alt={subject.name}
            ></Image>
            <div className="card-body">
              <h2 className="card-title">{subject.name}</h2>
              <p>{subject.description}</p>
              <div className="card-actions justify-end">
                <Link
                  href={`/${params.university}/${subject.slug}`}
                  className="btn btn-primary btn-sm"
                >
                  {randomWorkButtonName()}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
