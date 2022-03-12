import React, { FunctionComponent, useState } from "react";
import { SelectBlockMenu } from "./SelectBlockMenu";
import { Block } from "../url-generated-api";

export type AddBlockButtonProps = {
  onClick?: (elementType: Block["__typename"]) => void;
};
export const AddBlockButton: FunctionComponent<AddBlockButtonProps> = ({
  onClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      tabIndex={0}
      className="relative flex justify-center items-center flex-col group p-2"
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <button
        onClick={() => setIsMenuOpen(true)}
        className="text-center border-4 border-black/30 border-dashed rounded-lg w-full flex items-center space-x-4 group-hover:max-h-20 h-20 group-hover:opacity-100 max-h-2 overflow-hidden opacity-0 transition-all"
      >
        {/*<span className="flex-grow border-t-2" />*/}
        <div className="flex-grow font-bold text-black/30">
          Ajouter un nouveau block
        </div>
        {/*<span className="flex-grow border-t-2" />*/}
      </button>
      <SelectBlockMenu onClick={onClick} open={isMenuOpen} />
    </div>
  );
};
