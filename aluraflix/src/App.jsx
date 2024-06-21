import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
