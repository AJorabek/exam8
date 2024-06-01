import styled from "styled-components";
import { getData } from "../../../function/getPlayLists";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITData, ITrack } from "../../playlist/components/PlaylistAbout";
import appSlice from "../../../redux/appSlice";
import { Status } from "../Search";

const SForm = styled.form`
  max-width: 500px;

  margin: 20px auto 50px;
  display: flex;
  gap: 20px;
  overflow: hidden;
`;

const Container = styled.div`
  background-color: rgba(179, 179, 179, 0.7);
  backdrop-filter: blur(100px);
  width: 100%;
  padding: 10px 20px;
  border-radius: 14px;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 2rem;
    &::placeholder {
      color: white;
    }
  }
`;
const Btn = styled.button`
  padding: 10px 15px;
  border-radius: 14px;
  background-color: rgba(179, 179, 179, 0.7);
  backdrop-filter: blur(20px);
`;
const Form = ({
  setData,
  setLoading,
}: {
  setData: Dispatch<SetStateAction<ITrack[]>>;
  setLoading: (a: Status) => void;
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state: { token: string }) => state.token);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setLoading("loading");
    const data = new FormData(e.currentTarget);
    const text = data.get("text");
    if (text) {
      getData(
        token,
        "https://api.spotify.com/v1/search?q=" + text + "&type=track&limit=20"
      ).then((e: ITData) => {
        const data: ITrack[] = e.tracks.items
          .map((e) => ({ track: e }))
          .filter((e) => e.track.preview_url !== null);
        dispatch(appSlice.actions.givePlayListMusics(data));
        setData(data);

        if (data.length) {
          setLoading("finded");
        } else {
          setLoading("noresult");
        }
      });
    }
  };
  return (
    <SForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Container>
        <input
          name="text"
          type="text"
          placeholder="Search anyone music or artist"
        />
      </Container>
      <Btn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          width={30}
          height={30}
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
      </Btn>
    </SForm>
  );
};

export default Form;
