import React, { FunctionComponent, useState } from "react";
import { Block } from "../url-generated-api";
import CourseBlock, { CourseBlockType } from "./CourseBlock/CourseBlock";
import { TextBlockComponent } from "./TextBlock/TextBlockComponent";
import Heading from "./Heading/Heading";
import { AddBlockButton } from "./AddBlockButton";

const GetBlock: FunctionComponent<{
  block: Block;
  level: number;
  onChange: (block: Block) => void;
  editable: boolean;
}> = ({ children, block, level = 0, onChange, editable }) => {
  switch (block.__typename) {
    case "SectionBlock":
      return (
        <section className="ml-4 border-l border-primary border-l-4 pl-4">
          <Heading
            onChange={onChange}
            id={block.id}
            level={level}
            title={block.title}
            editable={editable}
            prefix="A"
          />
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
        <CourseBlock type={CourseBlockType.Definition}>{children}</CourseBlock>
      );
    case "CommentBlock":
      return (
        <CourseBlock type={CourseBlockType.Comment}>{children}</CourseBlock>
      );
    case "TextBlock":
      return (
        <TextBlockComponent
          id={block.id}
          onUpdate={onChange}
          editable={editable}
          content={block.content}
        />
      );
    default:
      return <>{children}</>;
  }
};

export type BlockComponentProps = {
  block: Block;
  level: number;
  onChange?: (block: Block) => void;
  editable?: boolean;
};
export const BlockComponent: FunctionComponent<BlockComponentProps> = ({
  block,
  level,
  onChange = () => {},
  editable = false,
}) => {
  const addNewElementBelow = (
    elementType: Block["__typename"],
    index: number
  ) => {
    let newBlock: Block;
    switch (elementType) {
      case "ExempleBlock":
        newBlock = {
          id: uuidv4(),
          blocks: [],
          __typename: "ExempleBlock",
        };
        break;
      case "SectionBlock":
        newBlock = {
          id: uuidv4(),
          blocks: [],
          title: "Nouveau titre",
          __typename: "SectionBlock",
        };
        break;
      case "TextBlock":
        newBlock = {
          id: uuidv4(),
          content: "😁 Votre texte ici...",
          __typename: "TextBlock",
        };
        break;
      case "TheoremBlock":
        newBlock = {
          id: uuidv4(),
          blocks: [],
          __typename: "TheoremBlock",
        };
        break;
      case "DefinitionBlock":
        newBlock = {
          id: uuidv4(),
          blocks: [],
          __typename: "DefinitionBlock",
        };
        break;
      case "CommentBlock":
        newBlock = {
          id: uuidv4(),
          blocks: [],
          __typename: "CommentBlock",
        };
        break;
      default:
        newBlock = {
          id: uuidv4(),
          blocks: [],
          __typename: "ExempleBlock",
        };
        break;
    }

    // add newBlock at index in blockChildren
    const newBlockChildren = [...blockChildren];
    newBlockChildren.splice(index + 1, 0, newBlock);
    setBlockChildren(newBlockChildren);
    childrenAdded(newBlockChildren);
  };

  // @ts-ignore
  const [blockChildren, setBlockChildren] = useState<Block[]>(
    "blocks" in block ? block.blocks : []
  );

  const childrenAdded = (children: Block[]) => {
    const newBlock = {
      ...block,
      blocks: children,
    };
    onChange(newBlock);
  };

  const mainBlockUpdate = (block: Block) => {
    const newBlock = {
      ...block,
      blocks: blockChildren,
    };
    onChange(newBlock);
  };

  const childUpdate = (childBlock: Block, index: number) => {
    // update block in blockChildren
    const newBlockChildren = [...blockChildren];
    newBlockChildren[index] = childBlock;
    setBlockChildren(newBlockChildren);
    childrenAdded(newBlockChildren);
  };

  return (
    <>
      <GetBlock
        editable={editable}
        onChange={mainBlockUpdate}
        level={level}
        block={block}
      >
        <section className={editable ? "" : "space-y-4"}>
          {blockChildren.map((blockChild, index) => (
            <div key={blockChild.id}>
              {editable && (
                <AddBlockButton
                  onClick={(elementType: Block["__typename"]) =>
                    addNewElementBelow(elementType, index - 1)
                  }
                />
              )}

              <BlockComponent
                editable={editable}
                onChange={(block1) => childUpdate(block1, index)}
                level={level + 1}
                block={blockChild}
              />
            </div>
          ))}
        </section>
        {editable && (
          <AddBlockButton
            onClick={(elementType: Block["__typename"]) =>
              addNewElementBelow(elementType, blockChildren.length + 1)
            }
          />
        )}
      </GetBlock>
    </>
  );
};

// function to generate UUID
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
