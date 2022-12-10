import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import { __getPosts } from "../lib/postApi";
import styled from "styled-components";

import Pagination from "../components/pagination/Pagination";

const GeneralLists = () => {
  const { error, isLoading, posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Section paddingTop="60px">
      <StHeader>
        <StH1>전체글 목록</StH1>
      </StHeader>
      <hr style={{ backgroundColor: "red" }} />
      <StPostsGroup>
        {currentPosts.map((post) => {
          return (
            <div>
              <Link
                key={post.id}
                style={{ textDecoration: "none", color: "grey" }}
                to={`/${post.id}`}
              >
                <div style={{ cursor: "pointer" }}>
                  <StP fontSize="20px">{post.title}</StP>
                  <StSpaceBtw>
                    <StP>{post.content}</StP>
                    <StP>2022/12/09/ 00: 00</StP>
                  </StSpaceBtw>
                </div>
              </Link>
              <Stline />
            </div>
          );
        })}
      </StPostsGroup>

      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Section>
  );
};

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StPostsGroup = styled.div`
  height: 600px;
`;

const StH1 = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  color: grey;
`;

const StP = styled.p`
  font-size: ${(prop) => prop.fontSize || "14px"};
  margin: 13px 0 0;

  /* overflow: hidden; */
`;

const StSpaceBtw = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
`;

const Stline = styled.hr`
  border: 1px solid #bebbbb;

  /* :hover {
    border: 1px solid blue;
  } */
`;

export default GeneralLists;
