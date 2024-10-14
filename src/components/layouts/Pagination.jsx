import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ReactDOM from "react-dom";
import Products from "./Products";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <Products />
          </div>
        ))}
    </>
  );
}

export default function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsSelected, setItemsSelected] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemsSelected(itemsPerPage + itemOffset);
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className="flex gap-y-[50px] flex-wrap justify-between ">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex justify-between ">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          pageClassName="inline-block border border-[#F0F0F0] font-sans text-sm text-[#767676] px-3.5 py-2"
          pageLinkClassName=""
          previousClassName="hidden"
          nextClassName="hidden"
          breakClassName="mt-2 px-6"
          breakLinkClassName="page-link"
          containerClassName="flex gap-x-4 mt-10"
          activeClassName="font-sans bg-[#262626] text-sm text-white px-3.5 py-2.5"
        />
        <div className="mt-[53px]">
          <p className="font-sans font-normal text-sm text-[#767676]">
            Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
            {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}
