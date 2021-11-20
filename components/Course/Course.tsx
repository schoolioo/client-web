import React, { FunctionComponent } from 'react';

export type CourseProps = {
  children: React.ReactNode;
};

const Course: FunctionComponent<CourseProps> = ({children}) => {
  return (
    <div className="space-y-4">
      {children}
    </div>
  );
};

export default Course;
