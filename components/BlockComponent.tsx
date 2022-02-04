import React, { FunctionComponent } from "react";
import { Block } from "../url-generated-api";
import Heading from "./Heading/Heading";
import CourseBlock, { CourseBlockType } from "./CourseBlock/CourseBlock";
import { TextBlockComponent } from "./TextBlock/TextBlockComponent";

export type BlockComponentProps = {
  block: Block;
  editable: boolean;
  update: () => void;
  level?: number;
};
export const BlockComponent: FunctionComponent<BlockComponentProps> = ({
                                                                         block,
                                                                         editable = false,
                                                                         update,
                                                                         level = 1,
                                                                       }) => {
  const addChildren = (type: string) => {
    if (
      block.__typename == "SectionBlock" ||
      block.__typename === "TheoremBlock" ||
      block.__typename === "DefinitionBlock" ||
      block.__typename === "ExempleBlock"
    ) {
      switch (type) {
        case "section":
          block.blocks.push({
            __typename: "SectionBlock",
            id: Math.random().toFixed(10),
            title: Math.random().toFixed(10),
            blocks: [],
          });
          break;
        case "theorem":
          block.blocks.push({
            __typename: "TheoremBlock",
            id: Math.random().toFixed(10),
            blocks: [],
          });
          break;
        case "exemple":
          block.blocks.push({
            __typename: "ExempleBlock",
            id: Math.random().toFixed(10),
            blocks: [],
          });
          break;
        case "definition":
          block.blocks.push({
            __typename: "DefinitionBlock",
            id: Math.random().toFixed(10),
            blocks: [],
          });
          break;
        case "text":
          block.blocks.push({
            __typename: "TextBlock",
            id: Math.random().toFixed(10),
            content: [
              { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum ipsum augue, eu condimentum ex gravida in. Aenean luctus interdum diam." }
            ]
          });
          break;
        default:
          break;
      }
    }
    update();
  };

  const GetElement: FunctionComponent = ({ children }) => {
    switch (block.__typename) {
      case "SectionBlock":
        return (
          <section className="ml-4">
            <Heading level={ level > 4 ? 4 : level } prefix="A">
              { block.title }
            </Heading>
            { children }
          </section>
        );
      case "TheoremBlock":
        return (
          <CourseBlock type={ CourseBlockType.Theorem }>{ children }</CourseBlock>
        );
      case "ExempleBlock":
        return (
          <CourseBlock type={ CourseBlockType.Example }>{ children }</CourseBlock>
        );
      case "DefinitionBlock":
        return (
          <CourseBlock type={ CourseBlockType.Definition }>{ children }</CourseBlock>
        );
      case "CommentBlock":
        return (
          <CourseBlock type={ CourseBlockType.Comment }>{ children }</CourseBlock>
        );
      case "TextBlock":
        return (
          <TextBlockComponent editable content={ block.content }/>
        );
      default:
        return <>{ children }</>;
    }
  };

  return (

    <GetElement>
      <div className="space-y-4">
        { block?.blocks?.map((value) => (
          <BlockComponent
            level={ level + 1 }
            key={ value.id }
            block={ value }
            editable
            update={ update }
          />
        )) }
      </div>

      { editable && <EditButton onClick={ addChildren }/> }
    </GetElement>


  );
};

type EditButtonProps = {
  onClick: (type: string) => void;
};
const EditButton: FunctionComponent<EditButtonProps> = ({ onClick }) => {
  return (
    <div className="w-full space-x-4">
      <button onClick={ () => onClick("section") }>Section</button>
      <button onClick={ () => onClick("theorem") }>Theorem</button>
      <button onClick={ () => onClick("exemple") }>Exemple</button>
      <button onClick={ () => onClick("definition") }>Definition</button>
      <button onClick={ () => onClick("text") }>Text</button>
    </div>
  );
};
