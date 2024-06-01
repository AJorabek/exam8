import BackHeader from "../../pages/home/components/BackHeader";
import HeaderAbout from "./HeaderAbout";
import Controllers from "../../pages/playlist/components/Controllers";
import Musics from "../../pages/playlist/components/Musics";
import Container from "./Container";

const LikedSongs = () => {
  return (
    <Container>
      <BackHeader />
      <HeaderAbout />
      <Controllers />
      <Musics />
    </Container>
  );
};

export default LikedSongs;
