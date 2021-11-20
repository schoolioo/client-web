import React, { FunctionComponent, useState } from 'react';

export type CourseBlockProps = {
  children?: React.ReactNode;
  type?: CourseBlockType;
  expandable?: boolean;
};


export enum CourseBlockType {
  Comment = "comment",
  Theorem = "theorem",
  Example = "example",
  Definition = "definition",
}

type ExpandIconProps = {
  expanded: boolean;
}

const ExpandIcon: FunctionComponent<ExpandIconProps> = ({expanded = false}) => {
  return (
    <svg className={ `h-5 w-5 transition-transform ease-in-out ${expanded ? "transform rotate-180" : ""}` } viewBox="0 0 24 24">
      <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  )
}

const CourseBlock: FunctionComponent<CourseBlockProps> = ({ children, type, expandable = false }) => {
  const getTypeData = () => {
    switch (type) {
      case CourseBlockType.Comment:
        return {
          className: 'bg-blue-100',
          title: <div className="text-blue-600">🤔 Remarque</div>
        };
      case CourseBlockType.Example:
        return {
          className: 'bg-gray-100',
          title: <div className="text-gray-600">Exemple</div>
        };
      case CourseBlockType.Definition:
        return {
          className: 'bg-red-100',
          title: <div className="text-red-600 flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 36 36">
              <path fill="#3B88C3"
                    d="M0 4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4z"/>
              <path fill="#FFF"
                    d="M20.512 8.071c0 1.395-1.115 2.573-2.511 2.573-1.333 0-2.511-1.209-2.511-2.573 0-1.271 1.178-2.45 2.511-2.45 1.333.001 2.511 1.148 2.511 2.45zm-4.744 6.728c0-1.488.931-2.481 2.232-2.481 1.302 0 2.232.992 2.232 2.481v11.906c0 1.488-.93 2.48-2.232 2.48s-2.232-.992-2.232-2.48V14.799z"/>
            </svg>
            Définition</div>
        };
      default:
        return {
          className: 'bg-yellow-100',
          title: <div className="text-yellow-600">🧮 Théorème</div>
        };
    }
  };


  const [expand, setExpand] = useState(false);

  return (
    <div className={ `rounded-xl p-5 font-body space-y-2 ${ getTypeData().className }` }>
      <header className="font-bold flex justify-between">{ getTypeData().title }{ expandable &&
      <button onClick={ () => setExpand(!expand) }><ExpandIcon expanded={expand}/></button> }</header>
      <main className={ `text-gray-700 space-y-4 ${ !expandable || expand ? "" : "hidden" }` }>
        { children }
      </main>
    </div>
  );
};

export default CourseBlock;
