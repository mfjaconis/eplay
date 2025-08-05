import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";
import ProductList from "./components/ProductsList";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProductList title="Promoções" background="gray" />
              <ProductList title="Em breve" background="black" />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
