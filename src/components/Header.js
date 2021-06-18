import React from "react";
import { Segment } from "semantic-ui-react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Segment basic textAlign="center" className="header-segment">
        <h1 className="header">trash.</h1>
        <SearchBar />
      </Segment>
    </>
  );
};

export default Header;
