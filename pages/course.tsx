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
              __typename: "TextBlock",
              content: "*Romain* a cassé **sa voiture** $$x^2$$" ,
              id: "246878d2-93a0-4311-9412-445b44983dd9"
            }
          ],
          id: "31129d2d-088d-4e87-99f7-961423b78bef"
        },
        {
          __typename: "TheoremBlock", blocks: [
            {
              __typename: "ExempleBlock", blocks: [
                {
                  __typename: "TextBlock",
                  content: "",
                  id: "24161e71-b24e-4224-a342-56d927335ae7"
                },
                {
                  __typename: "TextBlock",
                  content: "",
                  id: "dd9a46d7-a28b-4e96-bc9b-9431e8f92f80"
                }
              ],
              id: "51b9b062-85c7-4213-8d28-2e5a37269129"
            },
          ],
          id: "2847fd46-7876-432e-bc90-17bc430e1b84"
        },
        {
          __typename: "TextBlock",
          content: "",
          id: "99662c53-7fbc-4b40-968f-296343826276"
        }
      ],
      id: "3f8cfeba-4858-4113-8613-cfd0bdb3b1f8"
    },
    { title: "Partie 2", id: "9e9640f2-b330-4d8f-afec-5cc51321ef59", blocks: [] },
  ];


  return (
    <div className="space-y-4 p-5">
      { data.map(section => <SectionBlockComponent title={ section.title } blocks={ section.blocks }/>) }
    </div>


  );
};

export default Course;
