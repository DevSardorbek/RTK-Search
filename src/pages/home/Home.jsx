import React from "react";
import Search from "../../components/search/Search";
import { memo } from "react";

const Home = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default memo(Home);
