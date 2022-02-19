import React, { FunctionComponent } from "react";
import { Block } from "../url-generated-api";

export type SelectBlockMenuProps = {
  open?: boolean;
  onClick?: (elementType: Block["__typename"]) => void;
};
export const SelectBlockMenu: FunctionComponent<SelectBlockMenuProps> = ({
  open = false,
  onClick = () => {},
}) => {
  type SelectBlockMenuButtonProps = {
    name: Block["__typename"];
  };
  const SelectBlockMenuButton: FunctionComponent<SelectBlockMenuButtonProps> =
    ({ name = "CommentBlock", children }) => {
      return (
        <button
          onClick={() => onClick(name)}
          className="hover:bg-black/10 rounded p-2 fill-stone-700"
        >
          {children}
        </button>
      );
    };

  return (
    <>
      {open && (
        <div className="flex absolute shadow p-2 rounded bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-200">
          <SelectBlockMenuButton name="TextBlock">
            <svg className="h-5 aspect-square" viewBox="0 0 24 24">
              <path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z" />
            </svg>
          </SelectBlockMenuButton>

          <SelectBlockMenuButton name="SectionBlock">
            <svg className="h-5 aspect-square" viewBox="0 0 24 24">
              <path d="M5,4V7H10.5V19H13.5V7H19V4H5Z" />
            </svg>
          </SelectBlockMenuButton>

          <SelectBlockMenuButton name="TheoremBlock">
            <svg className="h-5 aspect-square" viewBox="0 0 24 24">
              <path d="M11.5 19.1C11.3 20.2 10.9 21 10.2 21.5C9.5 22 8.6 22.1 7.5 21.9C7.1 21.8 6.3 21.7 6 21.5L6.5 20C6.8 20.1 7.4 20.3 7.7 20.3C8.8 20.5 9.4 20 9.6 18.8L12 5.2C12.2 4 12.7 3.2 13.4 2.6C14.1 2.1 15.1 1.9 16.2 2.1C16.6 2.2 17.4 2.3 18 2.6L17.5 4C17.3 3.9 16.6 3.8 16.3 3.7C15 3.5 14.3 4.1 14 5.6L11.5 19.1Z" />
            </svg>
          </SelectBlockMenuButton>

          <SelectBlockMenuButton name="ExempleBlock">
            <svg className="h-5 aspect-square" viewBox="0 0 24 24">
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </SelectBlockMenuButton>

          <SelectBlockMenuButton name="DefinitionBlock">
            <svg className="h-5 aspect-square" viewBox="0 0 24 24">
              <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13,13V7H11V13H13M13,17V15H11V17H13Z" />
            </svg>
          </SelectBlockMenuButton>
          <SelectBlockMenuButton name="CommentBlock">
            <svg className="h-5 aspect-square" viewBox="0 0 24 24">
              <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M10 11C9.45 11 9 10.55 9 10S9.45 9 10 9 11 9.45 11 10 10.55 11 10 11M13 11C12.45 11 12 10.55 12 10S12.45 9 13 9 14 9.45 14 10 13.55 11 13 11M16 11C15.45 11 15 10.55 15 10S15.45 9 16 9 17 9.45 17 10 16.55 11 16 11Z" />
            </svg>
          </SelectBlockMenuButton>
        </div>
      )}
    </>
  );
};
