import React, { FunctionComponent, useState } from "react";
import { Block } from "../../url-generated-api";

export type NewSectionButtonProps = {
  blocksWhereToAdd: Block[];
};
export const NewSectionButton: FunctionComponent<NewSectionButtonProps> = ({
  blocksWhereToAdd,
}) => {
  const [expanded, setExpanded] = useState(false);

  const addBlock = () => {
    console.log(blocksWhereToAdd);
    blocksWhereToAdd.push({ __typename: "TheoremBlock", blocks: [] });
  };

  return (
    <div onBlur={() => setExpanded(false)}>
      {expanded ? (
        <div className="space-x-4">
          <button>Text</button>
          <button onClick={addBlock}>Theorem</button>
          <button>Exemple</button>
        </div>
      ) : (
        <button onClick={() => setExpanded(true)}>Add object</button>
      )}
    </div>
  );
};
