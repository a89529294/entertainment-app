import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Searchbar from "../components/Searchbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Searchbar placeholder="Search for movies or TV series" />
    </div>
  );
};

export default Home;
