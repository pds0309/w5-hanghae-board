import React from "react";
import styled from "styled-components";

const pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <StPageNumbers>
      {pages.map((page, index) => {
        return (
          <StBtn key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </StBtn>
        );
      })}
    </StPageNumbers>
  );
};

const StPageNumbers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3px;
`;

const StBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  background-color: grey;
  color: white;
  border-radius: 5px;

  cursor: pointer;
`;

export default pagination;
