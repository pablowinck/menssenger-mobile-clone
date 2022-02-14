import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { RadioButtonUnchecked } from "@styled-icons/material/RadioButtonUnchecked";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: chatList;
  background: ${(props) => props.theme.colors.black.default};

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const ProfileImage = styled.div<{ src: string }>`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
`;
export const Message = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  color: white;
`;
export const MessageText = styled.div`
  color: white;
  filter: opacity(0.5);
`;
export const Received = styled(CheckCircle)`
  width: 1rem;
  color: #43474d;
`;
export const Sent = styled(RadioButtonUnchecked)`
  width: 1rem;
  color: #43474d;
`;
