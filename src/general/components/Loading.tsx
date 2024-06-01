import styled from "styled-components";

const H1 = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  display: block;
  width: 100%;
`;

const Loading = () => {
  return <H1>Loading</H1>;
};

export default Loading;
