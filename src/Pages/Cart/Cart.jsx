import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { BsBagCheckFill } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const CartPage = () => {
  return (
    <section className="section py-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b boredr-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2</span>{" "}
                products in your cart
              </p>
            </div>
            <div className="cartItem w-full p-3 flex  gap-4 pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to="/product/5454" className="group">
                  <img
                    src="https://www.jiomart.com/images/product/original/rve5i9vivd/om-shantam-sarees-wine-woven-self-design-organza-soft-silk-jacquard-sarees-product-images-rve5i9vivd-0-202404152004.jpg?im=Resize=(330,410)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[90%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]">
                  <Link className="link">
                    A-Line Kurti with Sharee & Dupatta
                  </Link>
                </h3>

                <div
                  className="flex items-center
                 gap-4"
                >
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Size S <FaAngleDown />
                  </span>

                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Qty 1 <FaAngleDown />
                  </span>
                </div>

                <Rating
                  name="size-small"
                  defaultValue={4.5}
                  precision={0.5}
                  size="small"
                  readOnly
                />

                <div className="flex items-center gap-4 mt-2">
                  <span className="price text-black  text-[14px] font-[600]">
                    $58.00
                  </span>

                  <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                    $58.00
                  </span>

                  <span className="price text-primary  text-[14px] font-[600]">
                    55% OFF
                  </span>
                </div>
              </div>
            </div>
            <div className="cartItem w-full p-3 flex  gap-4 pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to="/product/5454" className="group">
                  <img
                    src="https://www.jiomart.com/images/product/original/rve5i9vivd/om-shantam-sarees-wine-woven-self-design-organza-soft-silk-jacquard-sarees-product-images-rve5i9vivd-0-202404152004.jpg?im=Resize=(330,410)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[90%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]">
                  <Link className="link">
                    A-Line Kurti with Sharee & Dupatta
                  </Link>
                </h3>

                <div
                  className="flex items-center
                 gap-4"
                >
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Size S <FaAngleDown />
                  </span>

                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Qty 1 <FaAngleDown />
                  </span>
                </div>

                <Rating
                  name="size-small"
                  defaultValue={4.5}
                  precision={0.5}
                  size="small"
                  readOnly
                />

                <div className="flex items-center gap-4 mt-2">
                  <span className="price text-black  text-[14px] font-[600]">
                    $58.00
                  </span>

                  <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                    $58.00
                  </span>

                  <span className="price text-primary  text-[14px] font-[600]">
                    55% OFF
                  </span>
                </div>
              </div>
            </div>
            <div className="cartItem w-full p-3 flex  gap-4 pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to="/product/5454" className="group">
                  <img
                    src="https://www.jiomart.com/images/product/original/rve5i9vivd/om-shantam-sarees-wine-woven-self-design-organza-soft-silk-jacquard-sarees-product-images-rve5i9vivd-0-202404152004.jpg?im=Resize=(330,410)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[90%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]">
                  <Link className="link">
                    A-Line Kurti with Sharee & Dupatta
                  </Link>
                </h3>

                <div
                  className="flex items-center
                 gap-4"
                >
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Size S <FaAngleDown />
                  </span>

                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Qty 1 <FaAngleDown />
                  </span>
                </div>

                <Rating
                  name="size-small"
                  defaultValue={4.5}
                  precision={0.5}
                  size="small"
                  readOnly
                />

                <div className="flex items-center gap-4 mt-2">
                  <span className="price text-black  text-[14px] font-[600]">
                    $58.00
                  </span>

                  <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                    $58.00
                  </span>

                  <span className="price text-primary  text-[14px] font-[600]">
                    55% OFF
                  </span>
                </div>
              </div>
            </div>
            <div className="cartItem w-full p-3 flex  gap-4 pb-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to="/product/5454" className="group">
                  <img
                    src="https://www.jiomart.com/images/product/original/rve5i9vivd/om-shantam-sarees-wine-woven-self-design-organza-soft-silk-jacquard-sarees-product-images-rve5i9vivd-0-202404152004.jpg?im=Resize=(330,410)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[90%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]">
                  <Link className="link">
                    A-Line Kurti with Sharee & Dupatta
                  </Link>
                </h3>

                <div
                  className="flex items-center
                 gap-4"
                >
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Size S <FaAngleDown />
                  </span>

                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] p-1 rounded-md cursor-pointer py-1 px-2">
                    Qty 1 <FaAngleDown />
                  </span>
                </div>

                <Rating
                  name="size-small"
                  defaultValue={4.5}
                  precision={0.5}
                  size="small"
                  readOnly
                />

                <div className="flex items-center gap-4 mt-2">
                  <span className="price text-black  text-[14px] font-[600]">
                    $58.00
                  </span>

                  <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                    $58.00
                  </span>

                  <span className="price text-primary  text-[14px] font-[600]">
                    55% OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary font-bold">$1,547</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold">United Kingdom</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="font-bold text-primary">$2,256</span>
            </p>

            <Button className="btn-org btn-lg w-full flex gap-2">
              <BsBagCheckFill className="text-[18px]" /> Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
