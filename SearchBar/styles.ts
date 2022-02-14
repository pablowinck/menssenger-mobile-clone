import { Search } from "@styled-icons/bootstrap/Search";
import styled from "styled-components";
export const Container = styled.div`
  grid-area: searchBar;
  padding: 3px 1rem;
`;
export const Bar = styled.div`
  height: 2.25rem;
  width: 100%;
  background: ${(props) => props.theme.colors.black.dark};
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
export const Icon = styled(Search)`
  width: 1rem;
  color: #8e8e93;
  margin-left: 0.5rem;
`;
export const Input = styled.input`
  width: 80%;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;

  padding: 5px;

  &:focus {
    outline: none;
  }
`;
