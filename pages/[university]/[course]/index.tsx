import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import { GetStaticProps } from "next";


export const getServerSideProps: GetStaticProps = ({ params }) => {
  return {
    props: {},
  };
};

const CourseIndexPage = () => {
  const router = useRouter();


  const { data, error, mutate } = useSWR(
    `http://schooliu.ddns.net:3000/lessons/${router.query.university}/${router.query.course}`,
    fetcher
  );

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default CourseIndexPage;
