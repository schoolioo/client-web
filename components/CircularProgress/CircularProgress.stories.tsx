import React from "react";

import { Meta, Story } from "@storybook/react";
import { CircularProgress, CircularProgressProps } from "./CircularProgress";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
} as Meta<CircularProgressProps>;

const Template: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
);
export const Default = Template.bind({});
Default.args = {
  progress: 50,
  strokeWidth: 8,
  radius: 70,
};

const WithChildrenTemplate: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args}>
    <div className="flex items-center flex-col">
      <div>😺</div>
      <div className="text-primary font-bold text-3xl">{args.progress}%</div>
    </div>
  </CircularProgress>
);
export const WithChildren = WithChildrenTemplate.bind({});
WithChildren.args = {
  progress: 50,
  strokeWidth: 8,
  radius: 70,
};
