import React, { FunctionComponent, useState } from "react";
import InformationIcon from "../icons/InformationIcon";
import ThinkingIcon from "../icons/ThinkingIcon";
import AbacusIcon from "../icons/AbacusIcon";
import { Block } from "../../url-generated-api";
import getBlock from "../../lib/GetBlock";
import { NewSectionButton } from "../NewSectionButton/NewSectionButton";

export type CourseBlockProps = {
  children?: React.ReactNode;
  type?: CourseBlockType;
  expandable?: boolean;
  blocks?: Block[];
  editable?: boolean;
  blocksWhereToAdd?: Block[];
};

export enum CourseBlockType {
  Comment = "comment",
  Theorem = "theorem",
  Example = "example",
  Definition = "definition",
}

type ExpandIconProps = {
  expanded: boolean;
};

const ExpandIcon: FunctionComponent<ExpandIconProps> = ({
  expanded = false,
}) => {
  return (
    <svg
      className={`h-5 w-5 transition-transform ease-in-out ${
        expanded ? "transform rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
      />
    </svg>
  );
};

const CourseBlock: FunctionComponent<CourseBlockProps> = ({
  children,
  type,
  expandable = false,
  blocks,
  editable = false,
  blocksWhereToAdd = [],
}) => {
  const getTypeData = () => {
    switch (type) {
      case CourseBlockType.Comment:
        return {
          className: "bg-blue-100",
          title: (
            <div className="text-blue-600 flex items-center">
              <ThinkingIcon /> Remarque
            </div>
          ),
        };
      case CourseBlockType.Example:
        return {
          className: "bg-gray-100",
          title: <div className="text-gray-600">Exemple</div>,
        };
      case CourseBlockType.Definition:
        return {
          className: "bg-red-100",
          title: (
            <div className="text-red-600 flex items-center">
              <InformationIcon />
              Définition
            </div>
          ),
        };
      default:
        return {
          className: "bg-yellow-100",
          title: (
            <div className="text-yellow-600 flex items-center">
              <AbacusIcon /> Théorème
            </div>
          ),
        };
    }
  };

  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`rounded-xl font-body space-y-2 select-none ${
        getTypeData().className
      }`}
    >
      <header
        onClick={() => setExpand(!expand)}
        className={`rounded-xl font-bold flex justify-between p-5 ${
          expandable
            ? "cursor-pointer hover:bg-black hover:bg-opacity-5 transition-colors ease-in-out"
            : ""
        }`}
      >
        {getTypeData().title}
        {expandable && <ExpandIcon expanded={expand} />}
      </header>
      <main
        className={`text-gray-700 space-y-4 px-5 pb-5 ${
          !expandable || expand ? "" : "hidden"
        }`}
      >
        {children}
        {blocks?.map((block) => getBlock(block, editable, blocksWhereToAdd))}
        {editable && <NewSectionButton blocksWhereToAdd={blocksWhereToAdd} />}
      </main>
    </div>
  );
};

export default CourseBlock;
