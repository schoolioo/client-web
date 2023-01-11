import Head from "next/head";
import { BlockComponent } from "../../../components/BlockComponent";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

export const getServerSideProps: GetServerSideProps<
  any,
  { university: string; course: string; lesson: string }
> = async ({ params }) => {
  const { university, course, lesson } = params as {
    university: string;
    course: string;
    lesson: string;
  };
  let url = `http://schooliu.ddns.net:3000/lessons/${university}/${course}/${lesson}`;
  const data = await fetch(url).then((value) => value.json());

  return {
    props: {
      pageData: data,
    },
  };
};

export interface LessonAPI {
  id: number;
  slug: string;
  icon: string;
  jsonContent: string;
  courseSlug: string;
  name: string;
  description: string;
  blocks: any[];
  universityId: string;
}

const LessonPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ pageData }) => {
  const router = useRouter();

  const { data, error, mutate } = useSWR<LessonAPI>(
    `http://schooliu.ddns.net:3000/lessons/${router.query.university}/${router.query.course}/${router.query.lesson}`,
    fetcher,
    { fallbackData: pageData }
  );

  const editCourse = async (blockToEdit: any) => {
    const res = await fetch(
      `http://schooliu.ddns.net:3000/lessons/${router.query.university}/${router.query.course}/${router.query.lesson}`,
      {
        method: "PUT",
        body: JSON.stringify({
          jsonContent: blockToEdit,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) throw new Error();
    await mutate();
  };

  const blocks = useMemo(() => {
    switch (data?.jsonContent) {
      case undefined:
        return [];
      case "{}":
        return [];
      default:
        return JSON.parse(data?.jsonContent ?? "[]");
    }
  }, [data?.jsonContent]);

  return (
    <>
      <Head>
        <title>{data?.name} - Schooliu</title>
      </Head>
      <nav className="bg-primary text-white">
        <div className="max-w-4xl p-5 m-auto flex justify-between">
          <h1 className="font-bold text-3xl">{data?.name}</h1>
          <Link href={`/${router.query.university}/${router.query.course}`}>
            <a className="border rounded-full px-4 block flex items-center">
              Retour aux cours
            </a>
          </Link>
        </div>
      </nav>
      <div className="space-y-4 p-5 max-w-4xl m-auto">
        <BlockComponent
          onChange={async (block) => {
            await editCourse("blocks" in block ? block.blocks : []);
          }}
          editable={true}
          block={{
            blocks: blocks,
            id: "",
          }}
        />
      </div>
    </>
  );
};

export default LessonPage;
