import { ICurMusic } from "./../general/utils/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  curPlayListMusics: [],
  curMusic: <ICurMusic>{
    id: "",
    index: 0,
    url: "",
    status: "pause",
    image: "",
    author: [],
    name: "",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    giveMeToken: (state, { payload }) => {
      state.token = payload;
    },
    preferStatus: (state) => {
      state.curMusic.status =
        state.curMusic.status === "pause" ? "playing" : "pause";
    },
    getNewToken: () => {},
    preferToken: (state, { payload }) => {
      state.token = payload;
    },
    givePlayListMusics: (state, { payload }) => {
      state.curPlayListMusics = payload;
    },
    preferMusic: (state, { payload }) => {
      state.curMusic = payload;
    },
  },
});

export default appSlice;
