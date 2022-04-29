import type { NextPage } from "next";
import { SubjectButton } from "../components/SubjectButton/SubjectButton";
import { Dialog, Menu } from "@headlessui/react";
import { useState } from "react";
import { AddSubjectModal } from "../components/AddSubjectModal";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

const Home: NextPage = () => {
  const { data, error } = useSWR("http://schooliu.ddns.net:3000/universities?page=1&numberPerPage=50", fetcher);
  return <div>
    {JSON.stringify(data)}
  </div>


};



export default Home;
