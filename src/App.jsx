import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostRegister from "./routes/PostRegister";
import GeneralLists from "./routes/GeneralLists";
import Detail from "./routes/Detail";
import Error from "./routes/Error";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/:id" element={<Detail />}></Route>
          <Route path="/error" element={<Error />} />
          <Route path="/regist" element={<PostRegister />} />
          <Route exact path="/" element={<GeneralLists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
