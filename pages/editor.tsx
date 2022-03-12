import type { NextPage } from "next";
import { useState } from "react";
import { BlockComponent } from "../components/BlockComponent";
import { Block } from "../url-generated-api";

const Editor: NextPage = () => {
  const [block, setBlock] = useState<Block>({
    title: "Partie 1",
    blocks: [],
    id: "3f8cfeba-4858-4113-8613-cfd0bdb3b1f8",
    __typename: "SectionBlock",
  });

  return (
    <div className="max-w-5xl m-auto">
      <BlockComponent
        onChange={(block) => {
          console.log(block);
          setBlock(block);
        }}
        level={1}
        block={block}
      />
    </div>
  );
};

export default Editor;
