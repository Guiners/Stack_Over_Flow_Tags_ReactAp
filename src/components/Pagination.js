import React from 'react';
import { Pagination } from '@mui/material';

const CustomPagination = ({ onPageChange, count, page, pageSize }) => {
  // console.log(count)
  const pageCount = Math.ceil(count / pageSize);
  // console.log(pageCount)

  const handlePageChange = (event, value) => {
    onPageChange(Number(value));
  };

  return (
    <Pagination
      count={pageCount}
      page={page}
      onChange={handlePageChange}
      shape="rounded"
      color="primary"
    />
  );
};

export default CustomPagination;
