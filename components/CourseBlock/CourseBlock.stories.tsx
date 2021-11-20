import React from 'react';

import { Meta, Story } from '@storybook/react';
import CourseBlock, { CourseBlockProps, CourseBlockType } from "./CourseBlock";
import MathBlock, { MathBlockProps } from "../MathBlock/MathBlock";
import { Inline } from "../MathBlock/MathBlock.stories";


export default {
  component: CourseBlock,
  title: 'Components/Course/CourseBlock',
  subcomponents: {
    MathBlock
  },
  args: {
    type: CourseBlockType.Theorem,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.values(CourseBlockType),
      },
    },
  }
} as Meta<CourseBlockProps>;


const Template: Story<CourseBlockProps> = (args) => <CourseBlock { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
  type: CourseBlockType.Theorem,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const TemplateWithMath: Story<CourseBlockProps & MathBlockProps> = (args) => (
  <CourseBlock { ...args }>
    On appelle fonction polynôme de degré 2 :<MathBlock inline={ args.inline } latex={ args.latex } align={args.align}/>
  </CourseBlock>
);
export const WithMath = TemplateWithMath.bind({});
WithMath.args = {
  type: CourseBlockType.Theorem,
  ...Inline.args
};

export const Nested = Template.bind({});
Nested.args = {
  type: CourseBlockType.Theorem,
  children: <div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <CourseBlock type={ CourseBlockType.Example }>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CourseBlock>
  </div>,
};

export const Expandable = Template.bind({});
Expandable.args = {
  type: CourseBlockType.Example,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  expandable: true,
};
