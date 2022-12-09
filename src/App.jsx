import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";

function App() {
  return (
    // TODO: redux Provider 감싸기
    <>
      <Header />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
