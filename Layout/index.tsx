import React from "react";
import ChatList from "../ChatList";
import Navbar from "../Navbar";
import OnlineUsers from "../OnlineUsers";
import SearchBar from "../SearchBar";
import TopBar from "../TopBar";
import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <SearchBar />
      <OnlineUsers />
      <ChatList />
      <Navbar />
    </Container>
  );
};

export default Layout;
