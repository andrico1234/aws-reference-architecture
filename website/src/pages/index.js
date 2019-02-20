import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";

const handleClick = () => {
  fetch("")
    .then(res => {
      console.log("success", res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

const IndexPage = () => (
  <Layout>
    <h1>Get data</h1>
    <Button onClick={handleClick} text="get data" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
