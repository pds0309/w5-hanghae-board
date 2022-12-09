import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostRegister from "./routes/PostRegister";

import Header from "./components/layout/Header";

function App() {
  return (
    // TODO: redux Provider 감싸기
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/regist" element={<PostRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
