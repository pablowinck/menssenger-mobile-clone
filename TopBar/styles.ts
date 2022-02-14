import { NewMessage } from "@styled-icons/entypo/NewMessage";
import { PhotoCamera } from "@styled-icons/material/PhotoCamera";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: topbar;
  background: #111111;
  display: flex;
  align-items: end;

  color: white;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
`;
const Oval = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;

  display: grid;
  place-items: center;

  background: ${(props) => props.theme.colors.black.dark};
`;
export const Avatar = styled(Oval)`
  background: url("https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80")
    no-repeat center;
  background-size: cover;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const Photo = styled(Oval)``;
export const PhotoIcon = styled(PhotoCamera)`
  width: 1.5rem;
`;
export const Message = styled(Oval)``;
export const MessageIcon = styled(NewMessage)`
  width: 1.3rem;
`;
