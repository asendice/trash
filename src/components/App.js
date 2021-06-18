import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Navigation from "./Navigation";
import Banner from "./Banner";

const App = () => {
  return (
    <>
      <Container className="container">
        <Navigation />
        <Header />
        <Banner />
      </Container>
    </>
  );
};

export default App;
