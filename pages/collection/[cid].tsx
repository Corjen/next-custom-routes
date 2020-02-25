import React from "react";
import { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

type Props = {
  query: ParsedUrlQuery;
};

const CollectionDetail: NextPage<Props> = props => {
  return (
    <div>
      <h1>CollectionDetail</h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

CollectionDetail.getInitialProps = ({ query }) => {
  return {
    query
  };
};

export default CollectionDetail;
