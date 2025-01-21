import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Hedaer/Header";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
