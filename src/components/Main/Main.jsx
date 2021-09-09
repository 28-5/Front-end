import React from "react";
import Container from '@material-ui/core/Container';
import LoginNavBtn from "../Login/LoginNavBtn";

const Main = () => {
    return(
      <Container maxWidth="lg">
          <LoginNavBtn />
          <section id="top">
              <img src="/img/reborn1.svg" />
          </section>
      </Container>
    );
};

export default Main;