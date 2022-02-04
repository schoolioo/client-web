import type { NextPage } from 'next';
import { FunctionComponent, useReducer, useState } from "react";
import { BlockComponent } from "../components/BlockComponent";
import { Block } from "../url-generated-api";


const Editor: NextPage = () => {
  const [block, setBlock] = useState<Block>({__typename: "SectionBlock", title: "Section 1", id: "317f4bdb-0029-4a63-90af-b2d33ae5f423", blocks: []});

  return (
    <div>
      <BlockComponent update={() => setBlock({...block})} block={block} editable/>
      <button onClick={() => {
        console.log(JSON.stringify(block));}}>Save</button>
    </div>
  );
};



export default Editor;
