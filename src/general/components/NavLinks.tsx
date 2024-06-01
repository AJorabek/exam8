import styled from "styled-components";
import IconLink from "./IconLink";
import datas from "../utils/datas";

const List = styled.ul`
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
`;

const NavLinks = () => {
  return (
    <List>
      {datas.map((e) => (
        <IconLink {...e} key={e.text} />
      ))}
    </List>
  );
};

export default NavLinks;
