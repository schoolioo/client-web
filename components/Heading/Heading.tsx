import React, { FunctionComponent, useState } from "react";

const HeadingText: FunctionComponent<{
  editable: boolean;
  text: string;
  setTitleData: (title: string) => void;
}> = ({ editable, text, setTitleData }) => {
  return editable ? (
    <input
      value={text}
      onChange={(event) => setTitleData(event.target.value)}
      className="font-bold w-full outline-0 focus:border-b-2  border-primary bg-transparent"
      type="text"
    />
  ) : (
    <span>{text}</span>
  );
};

export type HeadingProps = {
  prefix?: string;
  level?: number;
  editable?: boolean;
  title: string;
};
const Heading: FunctionComponent<HeadingProps> = ({
  prefix,
  level = 1,
  editable = true,
  title = "",
}) => {
  const [titleData, setTitleData] = useState(title);

  const classNames = "my-3 font-bold text-primary flex items-center";
  switch (level) {
    case 2:
      return (
        <h2 className={`text-2xl ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          <HeadingText
            setTitleData={setTitleData}
            text={titleData}
            editable={editable}
          />
        </h2>
      );
    case 3:
      return (
        <h3 className={`text-xl ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          <HeadingText
            setTitleData={setTitleData}
            text={titleData}
            editable={editable}
          />
        </h3>
      );
    case 4:
      return (
        <h4 className={`text-lg ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          <HeadingText
            setTitleData={setTitleData}
            text={titleData}
            editable={editable}
          />
        </h4>
      );
    default:
      return (
        <h1 className={`text-3xl ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          <HeadingText
            setTitleData={setTitleData}
            text={titleData}
            editable={editable}
          />
        </h1>
      );
  }
};

type HeadingPrefixProps = {
  prefix?: string;
  level?: number;
};

const HeadingPrefix: FunctionComponent<HeadingPrefixProps> = ({
  prefix,
  level = 1,
}) => {
  return (
    <span
      className={`${
        level === 1 && "bg-primary text-white"
      } mr-2 px-2 rounded-full border-primary border-4 justify-center items-center flex inline-block ${
        level >= 3 && "rounded-lg"
      }`}
    >
      {prefix}
    </span>
  );
};

export default Heading;
