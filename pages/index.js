import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Navbar from "../components/Navbar";
import { getPosts } from "./api/get";
import Mark from "../components/Mark";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Home(props) {
  return (
    <>
      <Navbar />
      <div>
        <Head>
          <title>RuMark</title>
          <meta
            name="description"
            content="Leave your mark on the internet for years to come!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          style={{ padding: "2rem" }}
          columnClassName="my-masonry-grid_column"
        >
          {props.marks.map((mark, i) => {
            return (
              <div key={i}>
                <Mark
                  username={mark.username}
                  message={mark.mark_data}
                  date={mark.date}
                />
              </div>
            );
          })}
        </Masonry>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const marks = await getPosts();
  console.log(marks);
  return {
    props: { marks: marks }, // will be passed to the page component as props
  };
}
