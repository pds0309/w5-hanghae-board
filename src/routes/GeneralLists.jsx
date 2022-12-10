import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import { __getPosts } from "../lib/postApi";
import styled from "styled-components";

const GeneralLists = () => {
  const { error, isLoading, posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

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
    <Section>
      <StHeader>
        <StH1>전체글 목록</StH1>
      </StHeader>
      <hr />
      {posts.map((post) => {
        return (
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
              <hr />
            </div>
          </Link>
        );
      })}

      <StPaging>
        <p>{`< `}</p>
        <>
          <StBtn>1</StBtn>
          <StBtn>2</StBtn>
          <StBtn>3</StBtn>
        </>
        <p>{` >`}</p>
      </StPaging>
    </Section>
  );
};

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StH1 = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  color: grey;
`;

const StP = styled.p`
  font-size: ${(prop) => prop.fontSize || "14px"};
  margin: 15px 0 0;

  /* overflow: hidden; */
`;

const StSpaceBtw = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
`;

const StPaging = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StBtn = styled.button`
  background-color: white;
  border: 0;
  cursor: pointer;
`;

export default GeneralLists;
