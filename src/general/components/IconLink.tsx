import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IAction } from "../utils/type";

const Icon = styled(NavLink)`
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
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
    & > img {
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

const IconLink = ({ icon, text, url }: IAction) => {
  return (
    <Icon to={url}>
      {icon}
      {text}
    </Icon>
  );
};

export default IconLink;
