import styled from "styled-components";
import { Container as Header } from "./_headerStyle";

export const Container = styled.div`
  display: none;
  height: 24px;
  line-height: 27px;
  background: black;
  color: white;

  ${Header}:hover & {
    display: none !important;
  }
`;
