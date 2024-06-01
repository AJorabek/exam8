import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 40px;
  background: linear-gradient(180deg, #3333a3 5.09%, #121212 33.4%)
    rgba(18, 18, 18, 1);
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
