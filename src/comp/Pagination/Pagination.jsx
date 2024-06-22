import React from 'react';
import './Pagination.css';

const Pagination = ({ articlesPerPage, totalArticles, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              onClick={() => paginate(currentPage - 1)}
              href="#!"
              className="page-link"
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a onClick={() => paginate(number)} href="#!" className="page-link">
                {number}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
            <a
              onClick={() => paginate(currentPage + 1)}
              href="#!"
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
