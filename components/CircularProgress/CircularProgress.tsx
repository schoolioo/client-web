import React, { FunctionComponent } from "react";

export type CircularProgressProps = {
  progress: number;
  radius: number;
  strokeWidth: number;
  children?: React.ReactNode;
  className?: string;
};
export const CircularProgress: FunctionComponent<CircularProgressProps> = ({
  progress,
  strokeWidth,
  radius,
  children,
  className = "text-primary",
}) => {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center overflow-hidden rounded-full">
      <svg className={`${className}`} height={radius * 2} width={radius * 2}>
        <circle
          opacity="0.2"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="transition-all ease-in-out"
          stroke="currentColor"
          fill="transparent"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
