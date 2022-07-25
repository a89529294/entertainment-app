import React from "react";
import { Trending } from "../contexts/dataContext";
import Loading from "./Loading";

function Trending({ trendingList }: { trendingList: Trending[] }) {
  const isLoading = !trendingList.length;
  if (isLoading) return <Loading />;

  return <div>{trendingList.map((t) => t.title)}</div>;
}

export default Trending;
