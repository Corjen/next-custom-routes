import React from "react";
import { NextPage } from "next";

type Props = {};

const Home: NextPage<Props> = props => {
  return <div>Home! {JSON.stringify(props)}</div>;
};

Home.getInitialProps = async ({ query }) => {
  return query;
};

export default Home;
