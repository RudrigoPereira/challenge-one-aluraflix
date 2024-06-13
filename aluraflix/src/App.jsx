import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <Background>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Background>
    </BrowserRouter>
  )
}

export default App
