import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Hedaer/Header";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route
            path={"/productListing"}
            exact={true}
            element={<ProductListing />}
          />
          <Route
            path={"/product/:id"}
            exact={true}
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
