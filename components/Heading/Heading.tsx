import React, { FunctionComponent } from "react";

export type HeadingProps = {
  children?: React.ReactNode;
  prefix?: string;
  level?: 1 | 2 | 3 | 4;
};

const Heading: FunctionComponent<HeadingProps> = ({
  children,
  prefix,
  level = 1,
}) => {
  const classNames = "my-3 font-bold text-primary flex items-center";
  switch (level) {
    case 2:
      return (
        <h2 className={`text-2xl ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`text-xl ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`text-lg ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          {children}
        </h4>
      );
    default:
      return (
        <h1 className={`text-3xl ${classNames}`}>
          {(prefix?.length ?? 0) > 0 && (
            <HeadingPrefix level={level} prefix={prefix} />
          )}
          {children}
        </h1>
      );
  }
};

type HeadingPrefixProps = {
  prefix?: string;
  level?: 1 | 2 | 3 | 4;
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
