import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getComments } from "../../lib/commentApi";
import { Colors } from "../../styles";
import Comment from "./Comment";

const CommentList = ({ postId }) => {
  const { comments, error } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComments(postId));
  }, [dispatch, postId]);

  return (
    <>
      {error ? (
        <div>{error.message}</div>
      ) : (
        <div style={{ marginBottom: "60px" }}>
          <StSectionInfo>전체댓글</StSectionInfo>
          <StHorizonRule />
          {comments.map((commentInfo) => (
            <Comment key={commentInfo.id} commentInfo={commentInfo} />
          ))}
        </div>
      )}
    </>
  );
};

const StHorizonRule = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${Colors.lightGrey};
  margin-bottom: 30px;
`;

const StSectionInfo = styled.h4`
  color: ${Colors.grey};
  margin-bottom: 10px;
`;

export default CommentList;
