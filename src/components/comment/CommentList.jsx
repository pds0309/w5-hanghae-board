import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getComments } from "../../lib/commentApi";
import {
  initDeleteStatus,
  initUpdateStatus,
} from "../../redux/modules/commentSlice";
import { clearError } from "../../redux/modules/postSlice";
import { Colors } from "../../styles";
import Comment from "./Comment";

const CommentList = ({ postId }) => {
  const { comments, error, updateSuccess, deleteSuccess } = useSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error !== null) dispatch(clearError()); // 에러 초기화
    dispatch(__getComments(postId)); // 데이터 조회
  }, []);

  useEffect(() => {
    if (deleteSuccess) {
      // 삭제 성공 시
      dispatch(initDeleteStatus()); // 삭제성공여부 플래그 초기화
      navigate(0);
    }
    if (updateSuccess) {
      // 수정 성공 시
      dispatch(initUpdateStatus()); // 수정성공여부 플래그 초기화
      navigate(0);
    } else if (error !== null) {
      // 에러 발생 시
      alert(error); // 얼럿창 출력
      dispatch(clearError()); // 에러 초기화
      window.location.href = `/${postId}`; // navigate로 하니 에러 초기화가 안됨
    }
  }, [error, deleteSuccess, updateSuccess, dispatch, navigate, postId]);

  return (
    <>
      <div style={{ marginBottom: "60px" }}>
        <StSectionInfo>전체댓글</StSectionInfo>
        <StHorizonRule />
        {comments.map((commentInfo) => (
          <Comment key={commentInfo.id} commentInfo={commentInfo} />
        ))}
      </div>
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
