import React, { FunctionComponent } from 'react';

export type CourseBlockProps = {
  children?: React.ReactNode;
  type?: CourseBlockType;
};


export enum CourseBlockType {
  Comment = "comment",
  Theorem = "theorem",
  Example = "example",
}

const CourseBlock: FunctionComponent<CourseBlockProps> = ({ children, type }) => {
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
          title: <div className="text-gray-600">💪 Exemple</div>
        };
      default:
        return {
          className: 'bg-yellow-100',
          title: <div className="text-yellow-600">🧮 Théorème</div>
        };
    }
  };


  return (
    <div className={ `rounded-xl p-5 font-body space-y-2 ${ getTypeData().className }` }>
      <header className="font-bold">{ getTypeData().title }</header>
      <main className="text-gray-700">
        { children }
      </main>
    </div>
  );
};

export default CourseBlock;
