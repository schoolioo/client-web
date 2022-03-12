import React, { FunctionComponent } from "react";
import Heading from "../Heading/Heading";
import { Block, SectionBlock } from "../../url-generated-api";
import CourseBlock, { CourseBlockType } from "../CourseBlock/CourseBlock";
import GetBlock from "../../lib/GetBlock";

export type SectionBlockComponentProps = {
  title: string;
  blocks: SectionBlock["blocks"];
  editable?: boolean;
  blocksWhereToAdd?: Block[];
};
export const SectionBlockComponent: FunctionComponent<SectionBlockComponentProps> =
  ({ title, blocks, editable = false, blocksWhereToAdd = [] }) => {
    return (
      <>
        <Heading>{title}</Heading>
        {blocks.map((block) => GetBlock(block, editable, blocksWhereToAdd))}
        <button>Add section</button>
      </>
    );
  };
