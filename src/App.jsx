import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "./routes/Detail";
import Header from "./components/layout/Header";

function App() {
  return (
    // TODO: redux Provider 감싸기
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
