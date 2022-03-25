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
            <div>12 chapitres</div>
          </div>
          {/*<div className="flex items-center space-x-1">*/}
          {/*  <svg className="h-5 w-5" viewBox="0 0 24 24">*/}
          {/*    <path*/}
          {/*      fill="currentColor"*/}
          {/*      d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C14.9 12 12.4 14.3 12 17.3L5.8 21M17.8 21.2L22.6 16.4L21.3 15L17.7 18.6L16.2 17L15 18.2L17.8 21.2"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*  <div>50 quiz</div>*/}
          {/*</div>*/}
          {/*<div className="flex items-center space-x-1">*/}
          {/*  <svg className="h-5 w-5" viewBox="0 0 24 24">*/}
          {/*    <path*/}
          {/*      fill="currentColor"*/}
          {/*      d="M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11S17.5 3 12 3M13 15H11V13H13V15M14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*  <div>25 questions sans réponses</div>*/}
          {/*</div>*/}
        </div>
      </section>
    </div>
  );
};
