import React, { useState } from "react";
import "./CategoryPanel.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegMinusSquare } from "react-icons/fa";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpencatPanel(newOpen);
  };

  const openSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubMenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      className="categoryPanel"
    >
      <h3 className="p-3 tex-[17px] font-[500] flex items-center justify-between">
        Shop By categories
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => {
                  openSubMenu(0);
                }}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => {
                  openSubMenu(0);
                }}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu absolute top-[100%] left-[0%] w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Creap Tshirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Leather watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/rolling-diamond"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Apparel
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>

        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => {
                  openSubMenu(1);
                }}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => {
                  openSubMenu(1);
                }}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu  w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Creap Tshirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Leather watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/rolling-diamond"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Apparel
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.isOpneCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
