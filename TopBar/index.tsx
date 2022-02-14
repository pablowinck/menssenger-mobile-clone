import React from "react";
import {
  Actions,
  Avatar,
  Container,
  Content,
  Message,
  MessageIcon,
  Photo,
  PhotoIcon,
  Profile,
  Title,
} from "./styles";

const TopBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Profile>
          <Avatar />
          <Title>Chats</Title>
        </Profile>
        <Actions>
          <Photo>
            <PhotoIcon />
          </Photo>
          <Message>
            <MessageIcon />
          </Message>
        </Actions>
      </Content>
    </Container>
  );
};

export default TopBar;
