import React from "react";
import {
  Container,
  Content,
  Item,
  Message,
  MessageText,
  Name,
  ProfileImage,
  Received,
  Sent,
} from "./styles";

const data = [
  {
    id: 1,
    name: "Martin Randolph",
    message: `What's man!`,
    yourMessage: true,
    createdAt: "9:40 AM",
    received: false,
    profileImage:
      "https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg",
  },
  {
    id: 2,
    name: "Andrew Parker",
    message: `Ok, thanks!`,
    yourMessage: true,
    createdAt: "9:25 AM",
    received: true,
    profileImage:
      "https://rollingstone.uol.com.br/media/stories/6-cenas-de-abertura-mais-engracadas-de-brooklyn-nine-nine/assets/7.jpeg",
  },
  {
    id: 3,
    name: "Karen Castillo",
    message: `Ok, See you in To...`,
    yourMessage: true,
    createdAt: "Fri",
    received: true,
    profileImage:
      "https://f.i.uol.com.br/fotografia/2021/03/30/1617139619606397a368aa0_1617139619_3x2_md.jpg",
  },
  {
    id: 4,
    name: "Maisy Humphrey",
    message: `Have a good day, Pablo!`,
    yourMessage: false,
    createdAt: "Fri",
    received: true,
    profileImage:
      "https://pbs.twimg.com/profile_images/1379135292527976449/ja3lSiek_400x400.jpg",
  },
  {
    id: 5,
    name: "Joshua Lawrence",
    message: `The business plan loo...`,
    yourMessage: false,
    createdAt: "Thu",
    received: false,
    profileImage:
      "https://i0.wp.com/cromossomonerd.com.br/wp-content/uploads/2018/09/Jeffrey-CN.png?fit=1068%2C600&ssl=1",
  },
  {
    id: 6,
    name: "Ronaldinho",
    message: `Caiu no dibre!`,
    yourMessage: false,
    createdAt: "Thu",
    received: true,
    profileImage:
      "https://i.superesportes.com.br/Iwl5iuwQyd5e9XTrszbO_19I3wQ=/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2019/10/31/2922120/20191031141422107829a.jpg",
  },
];

const ChatList: React.FC = () => {
  return (
    <Container>
      {data.map((item) => (
        <Item key={item.id}>
          <Content>
            <ProfileImage src={item.profileImage} />
            <Message>
              <Name>{item.name}</Name>
              <MessageText>
                {item.yourMessage && "You: "}
                {item.message}
                {" • "}
                {item.createdAt}
              </MessageText>
            </Message>
          </Content>
          {item.received ? <Received /> : <Sent />}
        </Item>
      ))}
    </Container>
  );
};

export default ChatList;
