import React, { FunctionComponent } from "react";
import { CircularProgress } from "../CircularProgress/CircularProgress";

export type SubjectButtonProps = {
  subject: string;
  progress: number;
};

export const SubjectButton: FunctionComponent<SubjectButtonProps> = ({
  subject,
  progress,
}) => {
  return (
    <div
      role={"button"}
      className="bg-gray-100 p-4 rounded-3xl flex space-x-5 cursor-pointer hover:shadow-md transition ease-in-out"
    >
      <section className="space-y-3">
        <CircularProgress
          radius={70}
          strokeWidth={9}
          progress={progress}
          className="text-primary"
        >
          <span className="text-5xl">🧮</span>
        </CircularProgress>
      </section>
      <section className="flex flex-col space-y-4 flex-grow">
        <h1 className="font-bold text-3xl">{subject}</h1>

        <div className="grid grid-cols-2 gap-3 text-gray-600">
          <div className="flex items-center space-x-1">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z"
              />
            </svg>
            <div>0 chapitres</div>
          </div>
        </div>
      </section>
    </div>
  );
};
