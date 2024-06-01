import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./general/components/Sidebar";
import GlobalStyles from "./general/utils/GlobalStyles";
import theme from "./general/utils/theme";
import { useDispatch } from "react-redux";
import { examination } from "./function/getToken";
import Playlist from "./pages/playlist/Playlist";
import MusicPlayer from "./general/components/MusicPlayer";
import LikedSongs from "./general/components/LikedSongs";
import Search from "./pages/search/Search";

const ParentEl = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 310px 1fr;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Sidebar />
        <Home />
      </>
    ),
  },
  {
    path: "/playlist/:id",
    element: (
      <>
        <Sidebar />
        <Playlist />
      </>
    ),
  },
  {
    path: "/liked",
    element: (
      <>
        <Sidebar />
        <LikedSongs />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Sidebar />
        <Search />
      </>
    ),
  },
]);
const Layout = () => {
  const dispatch = useDispatch();
  examination(dispatch);
  return (
    <ParentEl>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
        <MusicPlayer />
      <h2 style={{textAlign:"center"}}>by Jo'rabek Abdurahmonov</h2>
      </ThemeProvider>
    </ParentEl>
  );
};

export default Layout;
