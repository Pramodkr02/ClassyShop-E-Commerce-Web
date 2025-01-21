import React from "react";
import SideBar from "../../components/SideBar/SideBar";

const ProductListing = () => {
  return (
    <>
      <section className="py-8">
        <div className="container flex gap-3">
          <div className="sideBarWrapper w-[20%] h-full bg-white p-5">
            <SideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
