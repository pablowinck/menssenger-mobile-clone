import React from "react";
import {
  AddStoryText,
  Container,
  Content,
  Oval,
  User,
  UserName,
  UserPhoto,
} from "./styles";

const data = [
  {
    id: 1,
    name: "Joshua",
    photo:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "Martin",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Dean_Norris_by_Gage_Skidmore_2.jpg",
  },
  {
    id: 3,
    name: "Dean",
    photo:
      "https://i.pinimg.com/originals/b5/78/b7/b578b7f58b0cff2d5b152663f98758a3.jpg",
  },
  {
    id: 4,
    name: "John",
    photo:
      "https://rollingstone.uol.com.br/media/uploads/john_krasinski_foto_mike_coppola_getty_images.jpg",
  },
];

const OnlineUsers: React.FC = () => {
  return (
    <Container>
      <Content>
        <User>
          <Oval>+</Oval>
          <AddStoryText>Your story</AddStoryText>
        </User>
        {data.map((item, index) => (
          <User key={index}>
            <UserPhoto src={item.photo} />
            <UserName>{item.name}</UserName>
          </User>
        ))}
      </Content>
    </Container>
  );
};

export default OnlineUsers;
