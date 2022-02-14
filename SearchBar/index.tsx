import React from "react";
import { Bar, Container, Icon, Input } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Bar>
        <Icon />
        <Input placeholder="Search" />
      </Bar>
    </Container>
  );
};

export default SearchBar;
