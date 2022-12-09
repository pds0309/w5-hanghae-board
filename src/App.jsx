import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostRegister from "./routes/PostRegister";
import GeneralLists from "./routes/GeneralLists";

import Header from "./components/layout/Header";

function App() {
  return (
    // TODO: redux Provider 감싸기
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/regist" element={<PostRegister />} />
          <Route exact path="/" element={<GeneralLists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
