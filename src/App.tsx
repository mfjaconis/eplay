import Footer from "./components/Footer";
import Header from "./components/Header";
import Rotas from "./routes";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </>
  );
}

export default App;
