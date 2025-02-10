import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Hedaer/Header";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import React, { createContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductZoom from "./components/ProductZoom/ProductZoom";
import LoginPage from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/Register";

import SideCart from "./components/SideCart/SideCart";
import CartPage from "./Pages/Cart/Cart";

const MyContext = createContext();

function App() {
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const values = {
    setOpenCartPanel,
    toggleCartPanel,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route path={"/login"} exact={true} element={<LoginPage />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetail />}
            />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>

      {/* cart panel */}
      <SideCart
        openCartPanel={openCartPanel}
        toggleCartPanel={toggleCartPanel}
      />
    </>
  );
}

export default App;
export { MyContext };
