import styled from "styled-components";
import NavLinks from "./NavLinks";
import ActionsList from "./ActionsList";
import SongsList from "./SongsList";

const Container = styled.nav`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 70px 30px 0;
  position: sticky;
  top: 0;
`;
const Sidebar = () => {
  return (
    <Container>
      <NavLinks />
      <ActionsList />
      <SongsList />
    </Container>
  );
};

export default Sidebar;
