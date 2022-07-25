import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Searchbar from "../components/Searchbar";
import Trending from "../components/Trending";
import { dataContext } from "../contexts/dataContext";

const Home: NextPage = () => {
  const { trendingList } = useContext(dataContext);

  return (
    <div>
      <Searchbar placeholder="Search for movies or TV series" />
      <Trending trendingList={trendingList} />
    </div>
  );
};

export default Home;
