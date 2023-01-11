import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import { GetStaticProps } from "next";
import { AddLessonModal } from "../../../components/AddLessonModal";
import { FunctionComponent } from "react";
import Link from "next/link";

export const getServerSideProps: GetStaticProps = ({ params }) => {
  return {
    props: {},
  };
};

export interface LessonAPIResponse {
  name: string;
  id: number;
  icon: string;
  slug: string;
}

const CourseIndexPage = () => {
  const router = useRouter();

  const { data, error, mutate } = useSWR<LessonAPIResponse[]>(
    `http://schooliu.ddns.net:3000/lessons/${router.query.university}/${router.query.course}`,
    fetcher
  );

  const addNewLesson = async ({ name }: { name: string }) => {
    const { university, course } = router.query;
    console.log(university, course);
    const res = await fetch("http://schooliu.ddns.net:3000/lessons", {
      method: "POST",
      body: JSON.stringify({
        name,
        universityId: university,
        courseSlug: course,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error();

    await mutate();
  };

  return (
    <>
      <nav className="bg-primary p-5 text-white">
        <div className="flex items-center justify-between">
          <svg
            className="fill-white h-12"
            viewBox="0 0 99 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.912964 31.9079V30.7413C0.912964 26.3342 1.54256 22.2789 2.80175 18.5754C4.06093 14.8348 5.91268 11.5943 8.35699 8.8537C10.8013 6.11312 13.8196 3.98361 17.412 2.46517C21.0044 0.909707 25.1523 0.131973 29.8558 0.131973C34.5962 0.131973 38.7627 0.909707 42.3551 2.46517C45.9845 3.98361 49.0213 6.11312 51.4656 8.8537C53.91 11.5943 55.7617 14.8348 57.0209 18.5754C58.2801 22.2789 58.9097 26.3342 58.9097 30.7413V31.9079C58.9097 36.2781 58.2801 40.3334 57.0209 44.0739C55.7617 47.7774 53.91 51.018 51.4656 53.7956C49.0213 56.5362 46.003 58.6657 42.4106 60.1841C38.8182 61.7026 34.6703 62.4618 29.9669 62.4618C25.2634 62.4618 21.097 61.7026 17.4676 60.1841C13.8382 58.6657 10.8013 56.5362 8.35699 53.7956C5.91268 51.018 4.06093 47.7774 2.80175 44.0739C1.54256 40.3334 0.912964 36.2781 0.912964 31.9079ZM19.6341 30.7413V31.9079C19.6341 34.1671 19.8008 36.2781 20.1341 38.2409C20.4674 40.2038 21.0229 41.9259 21.8007 43.4073C22.5784 44.8517 23.6339 45.9812 24.9672 46.796C26.3004 47.6108 27.967 48.0181 29.9669 48.0181C31.9297 48.0181 33.5593 47.6108 34.8555 46.796C36.1887 45.9812 37.2442 44.8517 38.022 43.4073C38.7997 41.9259 39.3552 40.2038 39.6885 38.2409C40.0219 36.2781 40.1885 34.1671 40.1885 31.9079V30.7413C40.1885 28.5563 40.0219 26.5008 39.6885 24.575C39.3552 22.6122 38.7997 20.8901 38.022 19.4087C37.2442 17.8902 36.1887 16.7051 34.8555 15.8533C33.5222 15.0015 31.8556 14.5756 29.8558 14.5756C27.8929 14.5756 26.2449 15.0015 24.9116 15.8533C23.6154 16.7051 22.5784 17.8902 21.8007 19.4087C21.0229 20.8901 20.4674 22.6122 20.1341 24.575C19.8008 26.5008 19.6341 28.5563 19.6341 30.7413Z" />
            <path d="M41.0033 31.9079V30.7413C41.0033 26.3342 41.6329 22.2789 42.8921 18.5754C44.1512 14.8348 46.003 11.5943 48.4473 8.8537C50.8916 6.11312 53.91 3.98361 57.5023 2.46517C61.0947 0.909707 65.2426 0.131973 69.9461 0.131973C74.6865 0.131973 78.853 0.909707 82.4454 2.46517C86.0748 3.98361 89.1117 6.11312 91.556 8.8537C94.0003 11.5943 95.852 14.8348 97.1112 18.5754C98.3704 22.2789 99 26.3342 99 30.7413V31.9079C99 36.2781 98.3704 40.3334 97.1112 44.0739C95.852 47.7774 94.0003 51.018 91.556 53.7956C89.1117 56.5362 86.0933 58.6657 82.5009 60.1841C78.9085 61.7026 74.7606 62.4618 70.0572 62.4618C65.3537 62.4618 61.1873 61.7026 57.5579 60.1841C53.9285 58.6657 50.8916 56.5362 48.4473 53.7956C46.003 51.018 44.1512 47.7774 42.8921 44.0739C41.6329 40.3334 41.0033 36.2781 41.0033 31.9079ZM59.7244 30.7413V31.9079C59.7244 34.1671 59.8911 36.2781 60.2244 38.2409C60.5577 40.2038 61.1132 41.9259 61.891 43.4073C62.6687 44.8517 63.7242 45.9812 65.0575 46.796C66.3907 47.6108 68.0573 48.0181 70.0572 48.0181C72.02 48.0181 73.6496 47.6108 74.9458 46.796C76.2791 45.9812 77.3345 44.8517 78.1123 43.4073C78.89 41.9259 79.4455 40.2038 79.7789 38.2409C80.1122 36.2781 80.2788 34.1671 80.2788 31.9079V30.7413C80.2788 28.5563 80.1122 26.5008 79.7789 24.575C79.4455 22.6122 78.89 20.8901 78.1123 19.4087C77.3345 17.8902 76.2791 16.7051 74.9458 15.8533C73.6125 15.0015 71.946 14.5756 69.9461 14.5756C67.9832 14.5756 66.3352 15.0015 65.0019 15.8533C63.7057 16.7051 62.6687 17.8902 61.891 19.4087C61.1132 20.8901 60.5577 22.6122 60.2244 24.575C59.8911 26.5008 59.7244 28.5563 59.7244 30.7413Z" />
            <circle cx="72.9274" cy="39.426" r="4.14791" />
            <circle cx="32.6334" cy="39.426" r="4.14791" />
          </svg>
          <h1 className="font-bold text-3xl">Chapitres</h1>
          <div></div>
        </div>
      </nav>
      <div className="p-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {data &&
          data.map((el, index) => (
            <Link key={el.slug} href={`/${router.query.university}/${router.query.course}/${el.slug}`}>
              <a>
                <LessonButton
                  chapterIndex={index + 1}
                  name={el.name}
                ></LessonButton>
              </a>
            </Link>
          ))}

        <AddLessonModal onAdd={addNewLesson}></AddLessonModal>
      </div>
    </>
  );
};

export const LessonButton: FunctionComponent<{
  name: string;
  chapterIndex: number;
}> = ({ name, chapterIndex }) => {
  const getBgColor = () => {
    switch (chapterIndex % 5) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-blue-500";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-orange-500";
      default:
        return "bg-pink-500";
    }
  };
  return (
    <div
      className={`${getBgColor()} rounded-3xl flex cursor-pointer hover:shadow-md transition ease-in-out aspect-square relative overflow-hidden flex flex-col justify-between`}
    >
      <div className="p-4 top-0 w-full font-bold text-white">{name}</div>
      <div className="bg-gray-100 w-full p-4 uppercase font-bold text-black/50">
        Chapitre {chapterIndex}
      </div>
    </div>
  );
};

export default CourseIndexPage;
