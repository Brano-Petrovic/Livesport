import React from 'react';
import styled from 'styled-components';

const PaginationWrap = styled.div`
  margin: 30px auto;
`;

const PageNumber = styled.span`
  padding: 10px;
  border: 1px solid #ccc;
  background: ${({ current }) => current ? '#000' : 'none'};
  color: ${({ current }) => current ? '#fff' : '#000'};
  border-left: none;
  cursor: pointer;

  &:first-of-type {
    border-left: 1px solid #ccc;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:hover {
    background: #ccc;
  }
`;

function Pagination({ currentPage, perPage, totalCount, onChange }) {
  const pageCount = Math.round(totalCount / perPage);

  const getPages = () => {
    const pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }

    return pages;
  }

  return (
    <PaginationWrap>
      { getPages().map(page => <PageNumber current={currentPage === page} key={page} onClick={() => onChange(page)}>{ page }</PageNumber>) }
    </PaginationWrap>
  );
}

export default Pagination;
