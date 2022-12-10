import { useDispatch, useSelector } from "react-redux";

import Button from "../common/Button";
import { Colors } from "../../styles";
import { __getPostById } from "../../lib/postApi";
import styled from "styled-components";
import { useEffect } from "react";

const PostDetail = ({ postId }) => {
  const dispatch = useDispatch();
  const { post, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPostById({ id: postId }));
  }, [dispatch, postId]);

  if (isLoading) {
    return <StStatusContainer>...loading</StStatusContainer>;
  }
  if (error) {
    return <StStatusContainer>{error.message}</StStatusContainer>;
  }

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <StWriteInfoBox>
            <p>
              <span style={{ color: Colors.grey }}>작성자:&nbsp;</span>
              {post.userId}
            </p>
            <p style={{ color: Colors.grey }}>
              {post.createdAt
                .substring(0, 19)
                .replace(/-/g, "/")
                .replace("T", " ")}
            </p>
          </StWriteInfoBox>
          <StHorizonRule />
          <div style={{ minHeight: "300px" }}>
            <p style={{ lineHeight: "180%" }}>{post.content}</p>
          </div>
        </>
      )}
      <StButtonsContainer>
        <Button btnTheme="secondary">수정하기</Button>
        <Button btnTheme="secondary">삭제하기</Button>
      </StButtonsContainer>
      <StHorizonRule />
    </div>
  );
};

const StHorizonRule = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${Colors.lightGrey};
  margin-bottom: 30px;
`;

const StWriteInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 16px;
`;

const StStatusContainer = styled.div`
  min-height: 400px;
`;

export default PostDetail;
