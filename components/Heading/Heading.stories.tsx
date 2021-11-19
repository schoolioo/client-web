import React from 'react';

import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from "./Heading";

export default {
  title: 'Components/Heading',
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4],
      },
    },
  }
} as Meta<HeadingProps>;


const Template: Story<HeadingProps> = (args) => <Heading { ...args }/>;

export const Level1 = Template.bind({});
Level1.args = {
  children: "Schoolioo titre 1",
  prefix: "1",
  level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
  children: "Schoolioo titre 2",
  prefix: "A",
  level: 2,
};


export const Level3 = Template.bind({});
Level3.args = {
  children: "Schoolioo titre 3",
  prefix: "a",
  level: 3,
};


export const Level4 = Template.bind({});
Level4.args = {
  children: "Schoolioo titre 4",
  prefix: "a.1",
  level: 4,
};

const InText: Story = () => <div>
  <Heading level={1} prefix="1">Schoolioo titre 1</Heading>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at tincidunt.
  <Heading level={2} prefix="A">Schoolioo titre 2</Heading>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at tincidunt.
  <Heading level={3} prefix="a">Schoolioo titre 3</Heading>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at tincidunt.
  <Heading level={4} prefix="a.1">Schoolioo titre 4</Heading>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at tincidunt.
</div>;

export const All = InText.bind({});
All.args = {

};
