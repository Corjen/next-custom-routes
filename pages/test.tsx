import React from "react";
import { NextPage } from "next";
type Props = {};

const Test: NextPage<Props> = props => {
  return (
    <div>
      <h1>Test</h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

Test.getInitialProps = () => {
  return {};
};

export default Test;
