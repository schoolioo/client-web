import React, { FunctionComponent, ReactNode } from "react";

export type QuizButtonProps = {
  avatar: ReactNode;
};
export const QuizButton: FunctionComponent<QuizButtonProps> = ({
  children,
  avatar,
}) => {
  return (
    <button className="flex items-center space-x-4 shadow p-5 rounded-2xl block w-full hover:bg-primary group">
      <header>
        <div className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center bg-opacity-20 font-bold text-xl text-blue-700 group-hover:text-white group-hover:bg-white group-hover:bg-opacity-20">
          {avatar}
        </div>
      </header>
      <main className="font-bold group-hover:text-white">{children}</main>
    </button>
  );
};
