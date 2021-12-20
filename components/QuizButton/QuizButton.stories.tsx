import React from "react";

import { Meta, Story } from "@storybook/react";
import { QuizButton, QuizButtonProps } from "./QuizButton";
import MathBlock from "../MathBlock/MathBlock";

export default {
  component: QuizButton,
  title: "Components/QuizButton",
  subcomponents: {},
} as Meta<QuizButtonProps>;

const Template: Story<QuizButtonProps> = (args) => (<QuizButton avatar="A"><MathBlock latex="a^2+b^2"/></QuizButton>);
export const Default = Template.bind({});

const MultipleAnswersTemplate: Story<QuizButtonProps> = (args) => (
  <>
    <h1 className="text-3xl font-bold mb-10 text-gray-700">Quelle est la forme d'une équation du second degré ?</h1>
    <ul className="space-y-4">
      <QuizButton avatar="A"><MathBlock latex="ax+b=0"/></QuizButton>
      <QuizButton avatar="B"><MathBlock latex="a^2x + b^2x + c=0"/></QuizButton>
      <QuizButton avatar="C"><MathBlock latex="ax^2+bx+c=0"/></QuizButton>
      <QuizButton avatar="D"><MathBlock latex="a^2+b^2 = 0"/></QuizButton>
    </ul>
  </>
  );
export const MultipleAnswers = MultipleAnswersTemplate.bind({});
