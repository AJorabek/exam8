import styled from "styled-components";
import Music from "../../playlist/components/Music";
import { ITrack } from "../../playlist/components/PlaylistAbout";
import { Status } from "../Search";
import Loading from "../../../general/components/Loading";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 30px;
`;
const H1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  display: block;
  color: white;
`;

const Result = ({ data, loading }: { data: ITrack[]; loading: Status }) => {
  return (
    <Container>
      {loading === "finded" ? (
        data.map((e, i) => <Music index={i} track={e.track} />)
      ) : loading === "noresult" ? (
        <H1>No thing finded</H1>
      ) : loading === "loading" ? (
        <Loading />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Result;
