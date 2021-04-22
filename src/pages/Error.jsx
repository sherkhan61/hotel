import React from "react";
import Header from "../ui/Header";
import Banner from "../ui/Banner";
import { Link } from "react-router-dom";


const Error = () => {
  return (
      <Header>
        <Banner title="404" subtitle="page not found">
          <Link to="/hotel" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Header>
  );
};

export default Error;
