import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ count, setPageNumber }) {
  return (
    <div>
      <ReactPaginate
        pageCount={count}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-info"
        nextClassName="btn btn-info"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}

export default Pagination;
