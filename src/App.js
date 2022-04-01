import './App.css';
import "@fontsource/didact-gothic";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Grow from "./Components/Grow/Grow";
import Container from "react-bootstrap/Container";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Container id="page-container" className="App">
      <Container id="content-wrap-app">
        <Header />
        <main className="main-container">
          <Routes>
            <Route path='/' element={<Grow />}></Route>
          </Routes>
        </main>
      </Container>
      <Container id="footer">
        <Footer />
      </Container>
    </Container>
  );
}

export default App;
