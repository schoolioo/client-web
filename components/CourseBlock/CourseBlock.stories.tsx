import React from "react";

import { Meta, Story } from "@storybook/react";
import CourseBlock, { CourseBlockProps, CourseBlockType } from "./CourseBlock";
import MathBlock, { MathBlockProps } from "../MathBlock/MathBlock";
import { Inline } from "../MathBlock/MathBlock.stories";

export default {
  component: CourseBlock,
  title: "Components/Course/CourseBlock",
  subcomponents: {
    MathBlock,
  },
  args: {
    type: CourseBlockType.Theorem,
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: Object.values(CourseBlockType),
      },
    },
  },
} as Meta<CourseBlockProps>;

const Template: Story<CourseBlockProps> = (args) => (
  <CourseBlock {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </CourseBlock>
);

export const Primary = Template.bind({});
Primary.args = {
  type: CourseBlockType.Theorem,
};

const TemplateWithMath: Story<CourseBlockProps & MathBlockProps> = (args) => (
  <CourseBlock {...args}>
    On appelle fonction polynôme de degré 2 :
    <MathBlock inline={args.inline} latex={args.latex} align={args.align} />
  </CourseBlock>
);
export const WithMath = TemplateWithMath.bind({});
WithMath.args = {
  type: CourseBlockType.Theorem,
  ...Inline.args,
};

const NestedTemplate: Story<CourseBlockProps> = (args) => (
  <CourseBlock {...args}>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <CourseBlock type={CourseBlockType.Example}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </CourseBlock>
  </CourseBlock>
);
export const Nested = NestedTemplate.bind({});
Nested.args = {
  type: CourseBlockType.Theorem,
};

export const Expandable = Template.bind({});
Expandable.args = {
  type: CourseBlockType.Example,
  expandable: true,
};
