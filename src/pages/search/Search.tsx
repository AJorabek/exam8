import { useState } from "react";
import Container from "../../general/components/Container";
import Form from "./components/Form";
import { ITrack } from "../playlist/components/PlaylistAbout";
import Section from "../home/components/Section";
import Result from "./components/Result";

export type Status = "nofind" | "noresult" | "loading" | "finded";

const Search = () => {
  const [data, setData] = useState<ITrack[]>([]);
  const [loading, setLoading] = useState<Status>("nofind");
  return (
    <Container>
      <Form setData={setData} setLoading={setLoading} />
      <Result data={data} loading={loading} />
      <Section
        title="Made for you"
        url="https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists"
      />
    </Container>
  );
};

export default Search;
