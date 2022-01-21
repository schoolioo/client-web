import type { NextPage } from 'next';
import { SectionBlock } from "../url-generated-api";
import { SectionBlockComponent } from "../components/SectionBlock/SectionBlock";

const Course: NextPage = () => {

  let data: SectionBlock[] = [
    {
      title: "Partie 1", blocks: [
        {
          __typename: "ExempleBlock", blocks: [
            {
              __typename: "TextBlock", content: [
                {
                  isBold: true,
                  text: "Hello world"
                },
                {
                  text: " Hello world"
                },
                {
                  text: "x^2",
                  isMath: true
                },
              ]
            }
          ]
        },
        { __typename: "TheoremBlock", blocks: [
            {
              __typename: "ExempleBlock", blocks: [
                {
                  __typename: "TextBlock", content: [
                    {
                      isBold: true,
                      text: "Hello world"
                    },
                    {
                      text: " Hello world"
                    },
                    {
                      text: "x^2",
                      isMath: true
                    },
                  ]
                },
                {
                  __typename: "TextBlock", content: [
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at diam a neque mattis interdum eu sagittis dui. Morbi ac augue velit. Vestibulum tincidunt mauris nec est posuere, nec ultrices dolor auctor. Sed iaculis ligula at elementum iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lobortis sapien diam, sit amet condimentum tellus feugiat a. In pharetra porta libero, ut maximus purus elementum ut. Vivamus et bibendum nunc. Vivamus non felis eu velit mollis ullamcorper. Integer bibendum, lacus quis congue aliquet, magna dolor ultricies sem, id interdum diam dui in metus. Donec id consequat purus, vitae tincidunt sem. Ut aliquam lorem et diam luctus mollis. Nulla porta augue elit, eu tempor elit bibendum et. Proin lacus est, facilisis et rhoncus id, feugiat sit amet magna."
                    },
                  ]
                }
              ]
            },
          ] },
        {
          __typename: "TextBlock", content: [
            {
              isBold: true,
              text: "Hello world"
            },
            {
              text: " Hello world"
            },
            {
              text: "x^2",
              isMath: true
            },
          ]
        }
      ]
    },
    { title: "Partie 2", blocks: [] },
  ];


  return (
    <div className="space-y-4 p-5">
      { data.map(section => <SectionBlockComponent title={ section.title } blocks={ section.blocks }/>) }
    </div>


  );
};

export default Course;
