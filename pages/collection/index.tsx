import React from "react";
import { NextPage } from "next";
type Props = {};

const Collection: NextPage<Props> = props => {
  return (
    <div>
      <h1>Collection</h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

Collection.getInitialProps = () => {
  return {};
};

export default Collection;
