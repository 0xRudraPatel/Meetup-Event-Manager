import { Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Error404 from "./pages/404";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
