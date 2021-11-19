import React from 'react';

import { Meta, Story } from '@storybook/react';
import CourseBlock, { CourseBlockProps, CourseBlockType } from "./CourseBlock";


export default {
  component: CourseBlock,
  title: 'Components/CourseBlock',
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


const Template: Story<CourseBlockProps> = (args) => <CourseBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: CourseBlockType.Theorem,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const Nested = Template.bind({});
Nested.args = {
  type: CourseBlockType.Theorem,
  children: <div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><CourseBlock type={CourseBlockType.Example}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CourseBlock></div> ,
}
