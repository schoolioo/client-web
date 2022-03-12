import type { NextPage } from "next";
import { useState } from "react";
import { BlockComponent } from "../components/BlockComponent";
import { Block } from "../url-generated-api";

const Editor: NextPage = () => {
  const [blocks, setBlocks] = useState<Block[]>([
    {
      title: "Introduction",
      id: "3f8cfeba-4858-4113-8613-cfd0bdb3b1f8",
      __typename: "SectionBlock",
      blocks: [
        {
          __typename: "TextBlock",
          id: "494f44cf-f9ea-4d0b-b03c-0a65c33a23a8",
          content:
            "Tout problème d'optimisation peut se ramener à l'étude de la minimisation d'une fonction.",
          blocks: [],
        },
        {
          id: "759f95de-82b1-441c-8e2e-f831ba7d2148",
          blocks: [
            {
              __typename: "TextBlock",
              id: "d1c6e1a4-fc86-4bae-ba00-b94839ea5ef0",
              content:
                "La reconstruction de l'activité électrique corticale à partir de l'EEG $$\\overrightarrow {S}=\\begin{bmatrix} s_{1} \\\\ s_{2} \\\\ \\vdots  \\\\ s_{\\overrightarrow{P}} \\end{bmatrix}$$",
              blocks: [],
            },
            {
              __typename: "TextBlock",
              id: "ce4c5e85-72c9-4262-a1eb-e1303d885563",
              content:
                "$$\\overrightarrow{x}=\\begin{bmatrix} x_{1} \\\\ x_{2} \\\\ : \\\\ x_{N} \\end{bmatrix}$$ où $$N$$ et le nombre d'électrodes de scalp et où $$\\overrightarrow {P}$$ et le nombre de dipôles électriques utilisés pour tapisser le cerveau",
              blocks: [],
            },
            {
              __typename: "TextBlock",
              id: "19da828a-a384-43f7-a12f-cd3d16bda998",
              content:
                "$$f:x\\rightarrow \\left\\| \\overrightarrow{x}-A\\overrightarrow{s}\\right\\| _{2}^{2}+\\lambda \\left\\| T\\overrightarrow{s}\\right\\| _{2}^{2}$$",
              blocks: [],
            },
          ],
          __typename: "ExempleBlock",
        },
        {
          id: "f8f749f5-76ad-4990-8210-a04e95960652",
          blocks: [
            {
              __typename: "TextBlock",
              id: "5033323b-aa27-4656-b909-042ba7fb949f",
              content:
                "**Équation de Maxell** : équation de la physique qui traduisent le phénomène de propagation d'un champ électromagnétique dans un milieu.",
              blocks: [],
            },
          ],
          __typename: "TheoremBlock",
        },
        {
          id: "af76e573-3f38-4383-aac6-7bcf0fbe20c7",
          blocks: [
            {
              __typename: "TextBlock",
              id: "7318be10-5d74-4118-9aff-b2d6b8d21171",
              content:
                "**Théorème de coercivité** : si $$f$$ est une fonction de $$\\mathbb{R}^{\\overrightarrow{P}}$$ dans $$\\mathbb{R}$$ continue et verifiant :",
              blocks: [],
            },
            {
              __typename: "TextBlock",
              id: "70e351d1-26b7-4d70-85c6-0265c5d442b9",
              content:
                "$$\\lim _{||\\overrightarrow{s}||\\rightarrow +\\infty }f\\left( \\overrightarrow{s}\\right) =+\\infty $$ (coercie) alors il existe $$\\overrightarrow{s}^{\\star}$$ qui atteint le minimum : $$\\overrightarrow{s}^{\\star} \\in \\argmin_{\\overrightarrow{s} \\in \\mathbb{R}^{\\overrightarrow{P}}} f\\left( \\overrightarrow{s} \\right) $$",
              blocks: [],
            },
          ],
          __typename: "TheoremBlock",
        },
      ],
    },
  ]);

  return (
    <>
      <nav className="bg-primary p-5 text-white">
        <div className="max-w-5xl m-auto flex justify-between">
          <h1 className="font-bold text-3xl">Optimisation</h1>
          <button className="border rounded-full px-4">Edition</button>
        </div>
      </nav>
      <div className="max-w-5xl m-auto">
        <BlockComponent
          editable={true}
          onChange={(block) => {
            setBlocks("blocks" in block ? block.blocks : []);
          }}
          level={1}
          block={{ blocks: blocks, id: "" }}
        />
        <button
          className="bg-primary w-full p-4 text-white font-bold rounded-full"
          onClick={() => {
            console.log(JSON.stringify(blocks));
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Editor;
