import React from "react";
import { Segment, Icon, Header } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Segment basic className="navigation">
      <Header style={{ fontSize: "1.5rem" }}>
        <a href="#">Home</a>
        <Icon className="shopping-cart" size="big" name="shopping cart" />
        <span style={{ float: "right" }}>
          <a href="#">Sign In</a>
        </span>
      </Header>
    </Segment>
  );
};

export default Navigation;
