import { Block } from "../url-generated-api";
import CourseBlock, { CourseBlockType } from "../components/CourseBlock/CourseBlock";
import React from "react";
import { SectionBlockComponent } from "../components/SectionBlock/SectionBlock";
import { TextBlockComponent } from "../components/TextBlock/TextBlockComponent";

export default function (block: Block) {
  switch (block.__typename) {
    case "SectionBlock":
      return <SectionBlockComponent title={ block.title } blocks={ block.blocks }/>;
    case "DefinitionBlock":
      return <CourseBlock blocks={block.blocks} type={ CourseBlockType.Definition }/>;
    case "ExempleBlock":
      return <CourseBlock blocks={block.blocks} type={ CourseBlockType.Example } expandable/>;
    case "CommentBlock":
      return <CourseBlock blocks={block.blocks} type={ CourseBlockType.Comment }/>;
    case "TheoremBlock":
      return <CourseBlock blocks={block.blocks} type={ CourseBlockType.Theorem }/>;
    case "TextBlock":
      return <TextBlockComponent content={block.content}/>
  }
}
