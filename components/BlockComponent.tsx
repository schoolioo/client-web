import React, { FunctionComponent } from "react";
import { Block, ExempleBlock } from "../url-generated-api";
import Heading from "./Heading/Heading";
import CourseBlock, { CourseBlockType } from "./CourseBlock/CourseBlock";
import { TextBlockComponent } from "./TextBlock/TextBlockComponent";
import { AddBlockButton } from "./AddBlockButton";

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
  const GetElement: FunctionComponent = ({ children }) => {
    switch (block.__typename) {
      case "SectionBlock":
        return (
          <section className="ml-4 border-l border-primary border-l-4 pl-4">
            <Heading level={level > 4 ? 4 : level} prefix="A">
              {block.title}
            </Heading>
            {children}
          </section>
        );
      case "TheoremBlock":
        return (
          <CourseBlock type={CourseBlockType.Theorem}>{children}</CourseBlock>
        );
      case "ExempleBlock":
        return (
          <CourseBlock type={CourseBlockType.Example}>{children}</CourseBlock>
        );
      case "DefinitionBlock":
        return (
          <CourseBlock type={CourseBlockType.Definition}>
            {children}
          </CourseBlock>
        );
      case "CommentBlock":
        return (
          <CourseBlock type={CourseBlockType.Comment}>{children}</CourseBlock>
        );
      case "TextBlock":
        return (
          <TextBlockComponent
            parent={block}
            update={update}
            editable
            content={block.content}
          />
        );
      default:
        return <>{children}</>;
    }
  };

  const addNewElementBelow = (
    beforeIndex: number,
    elementType: Block["__typename"]
  ) => {
    let newBlock: Block;
    switch (elementType) {
      case "ExempleBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "ExempleBlock",
        };
        break;
      case "SectionBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          title: "Nouveau titre",
          __typename: "SectionBlock",
        };
        break;
      case "TextBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          content: "😁 Votre texte ici...",
          __typename: "TextBlock",
        };
        break;
      case "TheoremBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "TheoremBlock",
        };
        break;
      case "DefinitionBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "DefinitionBlock",
        };
        break;
      case "CommentBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "CommentBlock",
        };
        break;
      default:
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "ExempleBlock",
        };
        break;
    }
    if ("blocks" in block) block.blocks.splice(beforeIndex + 1, 0, newBlock);
    update();
  };

  return (
    <GetElement>
      <div>
        <AddBlockButton
          onClick={(elementType: Block["__typename"]) =>
            addNewElementBelow(-1, elementType)
          }
        />
        {"blocks" in block &&
          block?.blocks?.map((value, index) => (
            <div className="flex flex-col" key={value.id}>
              <BlockComponent
                level={level + 1}
                key={value.id}
                block={value}
                editable
                update={update}
              />
              <AddBlockButton
                onClick={(elementType: Block["__typename"]) =>
                  addNewElementBelow(index, elementType)
                }
              />
            </div>
          ))}
      </div>
    </GetElement>
  );
};
