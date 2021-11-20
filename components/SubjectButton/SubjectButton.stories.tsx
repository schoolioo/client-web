import React from "react";

import { Meta, Story } from "@storybook/react";
import { SubjectButton, SubjectButtonProps } from "./SubjectButton";

export default {
  title: "Components/SubjectButton",
  component: SubjectButton,
} as Meta;

const Template: Story<SubjectButtonProps> = (args) => (
  <SubjectButton {...args} />
);
export const Default = Template.bind({});
Default.args = {
  progress: 30,
  subject: "Mathématiques",
};
