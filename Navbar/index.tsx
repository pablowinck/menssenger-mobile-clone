import React from "react";
import { Chatting, Container, Discover, Icon, Profile } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Chatting active />
      <Icon notifications={2}>
        <Profile />
      </Icon>
      <Discover />
    </Container>
  );
};

export default Navbar;
