import styled from "styled-components";
import { IAction } from "../utils/type";
import { useNavigate } from "react-router-dom";

const Icon = styled.button`
  display: flex;
  width: 100%;
  font-weight: 700;
  gap: 20px;
  font-size: 2.3rem;
  transition: all 500ms;
  color: ${({ theme }) => theme.colors.text};
  img {
    color: ${({ theme }) => theme.colors.text};
  }
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Action = ({ icon, text, url }: IAction) => {
  const navigate = useNavigate();
  return (
    <Icon onClick={() => navigate(url)}>
      {icon}
      {text}
    </Icon>
  );
};

export default Action;
