import React, { createContext, useEffect, useState } from "react";
import Trending from "../components/Trending";
import data from "../data.json";

export type Trending = typeof data[number];
const emptyTrending: Trending[] = [];

export const dataContext = createContext({ trendingList: emptyTrending });

function DataContext({ children }: { children: React.ReactNode }) {
  const [trendingList, setTrendingList] = useState<Trending[]>([]);

  useEffect(() => {
    (async () => {
      await sleep(5000);
      setTrendingList(data.filter((v) => v.isTrending));
    })();
  }, []);

  return (
    <dataContext.Provider
      value={{
        trendingList,
      }}>
      {children}
    </dataContext.Provider>
  );
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default DataContext;
