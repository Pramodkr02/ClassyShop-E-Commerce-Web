import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import QuantityBox from "../../components/QuantityBox/QuantityBox";

const ProductDetail = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              className="link transition"
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8">
          <div className="productZoomConatiner w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%]">
            <h1 className="text-[22px] font-[600] mb-2">
              Chikanrai Woven Kurta
            </h1>
            <div className="items-center flex gap-5">
              <span className="text-gray-400 text-[13px]">
                Brands :{" "}
                <span className="font-[500] text-black opacity-85">
                  House of Chikankari
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4.5}
                precision={0.5}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (15)</span>
            </div>

            <div className="flex items-center mt-4 gap-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $58.00
              </span>
              <span className="price text-primary  text-[18px] font-[600]">
                $58.00
              </span>

              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>
            <br />
            <p className="mt-3 pr-10 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size: </span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="qtyBoxWrapper w-[80px]">
                <QuantityBox />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ProductDetail;
