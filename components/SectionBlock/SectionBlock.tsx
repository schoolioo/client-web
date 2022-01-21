import React, { FunctionComponent } from 'react';
import Heading from "../Heading/Heading";
import { SectionBlock } from "../../url-generated-api";
import CourseBlock, { CourseBlockType } from "../CourseBlock/CourseBlock";
import GetBlock from "../../lib/GetBlock";

export type SectionBlockComponentProps = {
  title: string
  blocks: SectionBlock["blocks"]
};
export const SectionBlockComponent: FunctionComponent<SectionBlockComponentProps> = ({ title, blocks }) => {
  return (
    <>
      <Heading>{ title }</Heading>
      {blocks.map(block => GetBlock(block))}
    </>
  );
};
