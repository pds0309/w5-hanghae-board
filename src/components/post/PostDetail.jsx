import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "../common/Button";
import { Colors } from "../../styles";
import PostDeleteModal from "./PostDeleteModal";
import PostUpdateModal from "./PostUpdateModal";
import { __getPostById } from "../../lib/postApi";
import styled from "styled-components";
import { getReadableDateByFormmatedDate } from "../../utils/dateHandler";

const PostDetail = ({ postId }) => {
  const dispatch = useDispatch();
  const { post, isLoading, error } = useSelector((state) => state.posts);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  useEffect(() => {
    dispatch(__getPostById({ id: postId }));
  }, [dispatch, postId]);

  if (isLoading) {
    return <StStatusContainer>...loading</StStatusContainer>;
  }
  if (error?.status === 404) {
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
              {getReadableDateByFormmatedDate(post.createdAt)}
            </p>
          </StWriteInfoBox>
          <StHorizonRule />
          <div style={{ minHeight: "300px" }}>
            <p style={{ lineHeight: "180%" }}>{post.content}</p>
          </div>
          {updateModalVisible && (
            <PostUpdateModal
              visible={updateModalVisible}
              onClose={() => setUpdateModalVisible(false)}
              {...post}
            />
          )}
          {deleteModalVisible && (
            <PostDeleteModal
              id={postId}
              visible={deleteModalVisible}
              onClose={() => setDeleteModalVisible(false)}
            />
          )}
        </>
      )}
      <StButtonsContainer>
        <Button
          btnTheme="secondary"
          onClick={() => setUpdateModalVisible(true)}
        >
          수정하기
        </Button>
        <Button
          btnTheme="secondary"
          onClick={() => setDeleteModalVisible(true)}
        >
          삭제하기
        </Button>
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
