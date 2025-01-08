import React, { useState } from 'react';
import { Pagination } from '@mui/material';

const PaginationComponent = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const totalItems = 100; // Example, replace with actual count of items

  const totalPages = Math.ceil(totalItems / rowsPerPage); // Calculate total pages based on rows per page

  const handleChangeRowsPerPage = (event) => {
    const value = event.target.value;
    setRowsPerPage(parseInt(value, 10)); // Set new rows per page
    setPage(1); // Reset page to 0
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage); // Update the page
  };

  return (
    <div className='flex justify-between'>
      {/* Rows per page select */}
      <div className='flex justify-center items-center'>
        <h1> Show {rowsPerPage} per page </h1>
        <select onChange={handleChangeRowsPerPage} className="select select-ghost ">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>

      {/* Pagination */}
      <div>
        <Pagination
          count={totalPages} // Pass the total number of pages
          page={page} 
          onChange={handleChangePage}
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#E83330', // Default text color for all pages
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#E83330', // Active page background color
              color: '#fff', // Active page text color
            },
            '& .MuiPaginationItem-previousNext': {
              color: '#E83330', // Default color for previous/next buttons
            },
          }}
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
