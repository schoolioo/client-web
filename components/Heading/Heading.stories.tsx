import React from "react";

import { Meta, Story } from "@storybook/react";
import Heading, { HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  argTypes: {
    level: {
      control: {
        type: "select",
        options: [1, 2, 3, 4],
      },
    },
  },
} as Meta<HeadingProps>;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Level1 = Template.bind({});
Level1.args = {
  title: "Schoolioo titre 1",
  prefix: "1",
  level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
  title: "Schoolioo titre 2",
  prefix: "A",
  level: 2,
};

export const Level3 = Template.bind({});
Level3.args = {
  title: "Schoolioo titre 3",
  prefix: "a",
  level: 3,
};

export const Level4 = Template.bind({});
Level4.args = {
  title: "Schoolioo titre 4",
  prefix: "a.1",
  level: 4,
};

const InText: Story = () => (
  <div>
    <Heading
      title="Schoolioo titre 1"
      id="fa094256-46a3-4022-a051-b1f1cc9a20a0"
      level={1}
      prefix="1"
    />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
    dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at
    tincidunt.
    <Heading
      title="Schoolioo titre 2"
      id="914133e3-ac4b-4814-898a-0639ad9ddf8c"
      level={2}
      prefix="A"
    />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
    dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at
    tincidunt.
    <Heading
      title="Schoolioo titre 3"
      id="b8423def-b45a-4263-b720-1d28030b08e8"
      level={3}
      prefix="a"
    />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
    dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at
    tincidunt.
    <Heading
      title="Schoolioo titre 4"
      id="eb418579-8771-424c-92dc-a7285787d3b1"
      level={4}
      prefix="a.1"
    />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
    dignissim mauris, laoreet blandit arcu. Donec porttitor porta erat at
    tincidunt.
  </div>
);

export const All = InText.bind({});
All.args = {};
