import styled from "styled-components";

export const Container = styled.div`
  grid-area: onlineUsers;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  padding: 1rem;
`;
export const Content = styled.div`
  display: flex;
  width: auto;
  gap: 2.1rem;
`;
export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  width: 4.68rem;
`;
export const AddStory = styled.div``;
export const Oval = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.black.dark};
  color: white;

  display: grid;
  place-items: center;

  font-size: 2.5rem;
  font-weight: lighter;
`;
export const AddStoryText = styled.div`
  color: white;
  filter: opacity(0.35);
`;

export const UserPhoto = styled(Oval)<{ src: string }>`
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0.25rem;

    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.green};
    border: 2px solid black;
  }
`;
export const UserName = styled.div`
  color: white;
  filter: opacity(0.35);
`;
