import React from 'react';

import { Meta, Story } from '@storybook/react';
import Course, { CourseProps } from "./Course";
import CourseBlock, { CourseBlockType } from "../CourseBlock/CourseBlock";
import Heading from "../Heading/Heading";
import MathBlock from "../MathBlock/MathBlock";


export default {
  component: Course,
  title: 'Components/Course',
  subcomponents: {
    CourseBlock,
    Heading
  },
} as Meta<CourseProps>;


const Template: Story<CourseProps> = (args) => (
  <Course { ...args }>
    <Heading level={1} prefix="1">Résolution d'une équation du second degré</Heading>
    <CourseBlock type={CourseBlockType.Definition}>
      Une équation du second degré est une équation de la forme :
      <MathBlock latex="ax^2 + bx + c = 0"/>
      où <MathBlock latex="a" inline/> est un nombre entier, <MathBlock latex="b" inline/> est un nombre reel et <MathBlock latex="c" inline/> est un nombre reel.
      <CourseBlock type={CourseBlockType.Example}>
        L'équation <MathBlock latex="x^2 - 2x + 1 = 0" inline/> est un exemple de l'équation du second degré.
      </CourseBlock>
    </CourseBlock>
    <CourseBlock type={CourseBlockType.Definition}>
      On appelle discriminant du trinôme de l'équation du second degré noté <MathBlock inline latex="\Delta"/> :
      <MathBlock latex="\Delta = b^2 - 4ac"/>

      <CourseBlock type={CourseBlockType.Example}>
        Le discrimant de l'équation <MathBlock inline latex="3x^{2}-6x-2=0"/> est <MathBlock inline latex="\Delta =\left( -6\right) ^{2}-4\times 3\times \left( -2\right) =36+24=60"/>.
      </CourseBlock>
    </CourseBlock>
    <CourseBlock type={CourseBlockType.Theorem}>
      Soit <MathBlock inline latex="\Delta"/> le discriminant de l'équation du second degré.
      <ul>
        <li>
          Si <MathBlock inline latex="\Delta"/> est négatif, l'équation du second degré n'a pas de solution.
        </li>
        <li>
          Si <MathBlock inline latex="\Delta"/> est nul, l'équation du second degré a une solution unique. <MathBlock latex="x_0 = - \frac{b}{2a}" inline/>
        </li>
        <li>
          Si <MathBlock inline latex="\Delta"/> est positif, l'équation du second degré a deux solutions. <MathBlock inline latex="x_1 = \frac{-b-\sqrt{\Delta}}{2a}"/> <MathBlock inline latex="x_2 = \frac{-b+\sqrt{\Delta}}{2a}"/>
        </li>
      </ul>
    </CourseBlock>
  </Course>
);
export const Default = Template.bind({});
