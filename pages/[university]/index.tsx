import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const UniversityIndexPage = () => {
  const { data, error } = useSWR("http://schooliu.ddns.net:3000/universities?page=1&numberPerPage=50", fetcher);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default UniversityIndexPage
