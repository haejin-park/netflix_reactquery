import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.style.css';

const Pagination = ({data, handlePageClick, page}) => {

  return (
    <div>
      <ReactPaginate
        onPageChange={handlePageClick}
        forcePage={page-1} //내가 선택한 페이지
        pageCount={data?.total_pages} //전체페이지
        previousLabel={page > 1 ? "<" : null}
        nextLabel={page < data?.total_pages? ">" : null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName={page > 1 ? "previous-page-item" : "previous-page-item-hidden"}
        previousLinkClassName={page > 1 ? "previous-page-link" : "previous-page-link-hidden"}
        nextClassName={page < data?.total_pages? "next-page-item" : "next-page-item-hidden"}
        nextLinkClassName={page < data?.total_pages? "next-page-link" : "next-page-link-hidden"}
        breakLabel="..."
        breakClassName="page-item" 
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active-page-item"
        activeLinkClassName="active-page-link"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
      />
    </div>
  )
}

export default Pagination;
