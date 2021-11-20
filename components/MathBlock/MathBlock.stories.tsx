import React from "react";

import { Meta, Story } from "@storybook/react";
import MathBlock, { MathBlockProps } from "./MathBlock";

export default {
  title: "Components/MathBlock",
  argTypes: {
    align: {
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
  },
} as Meta<MathBlockProps>;

const TemplateBlock: Story<MathBlockProps> = (args) => (
  <div>
    On appelle fonction polynôme de degré 2 :<MathBlock {...args} />
  </div>
);
export const Block = TemplateBlock.bind({});
Block.args = {
  latex: "\\left( a+b\\right) ^{2}=a^{2}+2ab+b^{2}",
  inline: false,
  align: "center",
};

const TemplateInline: Story<MathBlockProps> = (args) => (
  <div>
    On appelle fonction polynôme de degré 2 :<MathBlock {...args} />. Une
    fonction polynôme de degré 2 s'appelle également fonction trinôme du second
    degré ou par abus de langage "trinôme".
  </div>
);
export const Inline = TemplateInline.bind({});
Inline.args = {
  latex: "\\left( a+b\\right) ^{2}=a^{2}+2ab+b^{2}",
  inline: true,
  align: "center",
};
