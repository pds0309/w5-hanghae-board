import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getComments } from "../../lib/commentApi";
import { setResultMessage } from "../../redux/modules/commentSlice";
import { Colors } from "../../styles";
import Comment from "./Comment";

const CommentList = ({ postId }) => {
  const { comments, error, resultMessage } = useSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();

  const showResultMessage = () => {
    if (resultMessage !== "") {
      alert(resultMessage);
      dispatch(setResultMessage(""));
    }
  };
  useEffect(() => {
    dispatch(__getComments(postId));
  }, [dispatch, postId]);

  return (
    <>
      {error ? (
        <Error>{`${resultMessage} [${error}]`}</Error>
      ) : (
        <div style={{ marginBottom: "60px" }}>
          {resultMessage ? showResultMessage() : ""}
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

const Error = styled.span`
  color: red;
`;

export default CommentList;
