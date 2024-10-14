import { useState } from "react";
import Breadcrumbs from "../components/layouts/Breadcrumbs";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";

import Pagination from "../components/layouts/Pagination";
import LeftSidebar from "../components/layouts/LeftSidebar";

const Shop = () => {
    const [items, setItems] = useState(12);
    function handleChange(e) {
      setItems(parseInt(e.target.value));
    }
  return (
    <div>
      <Container>
        <h2 className="text-[48px] font-sans font-bold text-primary mt-[124px] mb-[11px]">
          Products
        </h2>
        <Breadcrumbs />

        <Flex className="gap-x-10">
          <div className="w-3/12 mt-[130px]">
          <LeftSidebar/>
          </div>

          <div className="w-9/12 mt-[136px] justify-end">
            <Flex className="gap-10 justify-end mb-[60px]">
              <form className="font-sans font-normal text-base text-[#767676] ">
                <label className="mr-[14px]">Sort by:</label>

                <select
                  name="Featured"
                  className="border border-[#fofofo] py-1 pl-5  font-normal w-[240px]"
                >
                  <option selected>Featured</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </form>

              <div>
                <div className="font-sans font-normal text-base text-[#767676] ">
                  <label className="mr-[14px]">Show:</label>

                  <select
                    onChange={handleChange}
                    name="Featured"
                    className="border border-[#fofofo] py-1 pl-5  font-normal w-[140px]"
                  >
                    <option value="12" selected>
                      12
                    </option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                  </select>
                </div>
              </div>
            </Flex>
            <Pagination itemsPerPage={items} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
