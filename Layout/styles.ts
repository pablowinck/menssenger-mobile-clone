import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6.75rem 3rem 6.25rem auto 5.375rem;
  grid-template-areas:
    "topbar"
    "searchBar"
    "onlineUsers"
    "chatList"
    "footer";
  background: black;
`;
