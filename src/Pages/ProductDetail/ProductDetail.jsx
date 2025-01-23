import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import QuantityBox from "../../components/QuantityBox/QuantityBox";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { BiGitCompare } from "react-icons/bi";

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

          <div className="productContent w-[60%] pr-11">
            <h1 className="text-[22px] font-[600] mb-2">
              Chikanrai Woven Kurta Self Design Kurta Self Design Bollywood Net
              Saree (Blue)
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

            <p className="text-[14px] mt-4 mb-3">
              Free shipping (Est. delivery Time 2-3 days)
            </p>

            <div className="flex items-center gap-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QuantityBox />
              </div>
              <Button className="btn-org flex gap-2 !min-h-[41px]">
                <AiOutlineShoppingCart className="text-[20px]" />
                Add To Cart
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span>
                <Link className="flex link items-center gap-2 text-[15px] font-[500] cursor-pointer capitalize">
                  <FaRegHeart className="text-[18px]" />
                  Add to wishlist
                </Link>
              </span>
              <span>
                <Link className="flex link items-center gap-2 text-[15px] font-[500] cursor-pointer capitalize">
                  <BiGitCompare className="text-[18px]" />
                  compare
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="container !mt-10">
          <div className="flex items-center gap-8">
            <span className="link text-[17px] cursor-pointer font-[500]">
              Discription
            </span>
            <span className="link text-[17px] cursor-pointer font-[500]">
              Product Details
            </span>
            <span className="link text-[17px] cursor-pointer font-[500]">
              Reviews (52)
            </span>
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
