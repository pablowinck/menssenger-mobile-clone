import { ChatFill } from "@styled-icons/bootstrap/ChatFill";
import { Compass } from "@styled-icons/fa-solid/Compass";
import { UserFriends } from "@styled-icons/fa-solid/UserFriends";
import styled from "styled-components";
export const Container = styled.div`
  grid-area: footer;
  width: 100%;

  background: #111111;

  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: initial;

  gap: 3rem;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";

    position: absolute;
    left: 10px;
    top: -30px;
    width: 5rem;
    height: 5rem;
    background: white;

    border-radius: 50%;

    filter: blur(50px);

    opacity: 0.5;
  }
`;

export const Chatting = styled(ChatFill)<{ active: boolean }>`
  width: 2rem;
  height: 2rem;
  color: ${(props) => (props.active ? "#ffffff" : "#43474d")};
`;
export const Icon = styled.div<{ notifications: number }>`
  position: relative;
  &::after {
    content: "${(props) => props.notifications}";
    position: absolute;
    top: 0;
    right: -12px;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    border: 3px solid #111111;
    background: rgba(30, 130, 76, 0.8);
    color: ${(props) => props.theme.colors.green};
    font-weight: bold;
    font-size: 12px;

    z-index: 1;

    display: grid;
    place-items: center;
  }
`;
export const Profile = styled(UserFriends)`
  width: 2rem;
  height: 2rem;
  color: #43474d;
  position: relative;
`;

export const Discover = styled(Compass)`
  width: 2rem;
  height: 2rem;
  color: #43474d;
`;
