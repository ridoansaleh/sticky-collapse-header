import styled from "styled-components";
import { Container as Header } from "./_headerStyle";

export const Container = styled.div`
  display: block;
  height: 88px;
  background: yellow;
  font-size: 25px;
  line-height: 88px;

  ${Header}:hover & {
    display: block !important;
  }
`;
