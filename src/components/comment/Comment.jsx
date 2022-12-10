import React, { useCallback, useState } from "react";
import { Colors } from "../../styles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getCommentById, __removeComment } from "../../lib/commentApi";
import {
  removeComment,
  setIsMofidy,
  setIsRemove,
} from "../../redux/modules/commentSlice";
import Modal from "../common/Modal";
import Input from "../common/Input";
import useInput from "../../hooks/useInput";

const Comment = ({ commentInfo }) => {
  const dispatch = useDispatch();
  let { isRemove } = useSelector((state) => state.comments);
  const { id, postId, comment, createdAt, userId, password } = commentInfo;
  const [chkPassword, setChkPassword, onChangeChkPassword] = useInput("");
  const [message, setMessage] = useState("");

  // 수정여부 플래그 true
  const showRemovePopup = () => {
    dispatch(setIsRemove(true));
  };

  // 팝업을 닫는다
  const onClose = useCallback(() => {
    dispatch(setIsRemove(false));
    setChkPassword("");
    setMessage("");
  }, [dispatch, setChkPassword]);

  // 삭제 버튼 클릭 시
  const onRemove = useCallback(
    (event) => {
      event.preventDefault();
      // 입력값을 확인한다.
      if (chkPassword === "") {
        setIsRemove(true); // 팝업을 계속 띄운다.
      } else {
        // 비밀번호 확인
        if (password !== chkPassword) {
          setMessage("비밀번호가 다릅니다.");
          setChkPassword("");
        } else {
          // 비밀번호가 같으면 삭제한다.
          // 댓글 삭제 API 요청
          dispatch(__removeComment(id)).then(() => {
            alert("댓글이 정상적으로 삭제되었습니다.");
            dispatch(removeComment(id)); // 화면의 댓글 목록 데이터 동기화
            onClose();
          });
        }
      }
    },
    [id, password, chkPassword, setChkPassword, dispatch, onClose]
  );

  return (
    <>
      <div>
        <StCommentContainer>
          <div style={{ padding: "16px" }}>
            <StCommentName>{userId}</StCommentName>
            <StCommentDate>{createdAt}</StCommentDate>
            <div>
              <StLink>수정</StLink>
              <StLink onClick={showRemovePopup}>삭제</StLink>
            </div>
          </div>
          <div>
            <StCommentContent>{comment}</StCommentContent>
          </div>
        </StCommentContainer>
        <StHorizonRule style={{ maxWidth: "800px" }} />
      </div>
      <Modal
        visible={isRemove ? true : false}
        title="비밀번호를 입력하세요."
        children={
          <>
            <div>
              <label>비밀번호</label>
              <Input
                type="password"
                value={chkPassword}
                onChange={onChangeChkPassword}
                required
              />
            </div>
            <Message>{message}</Message>
          </>
        }
        onSubmit={onRemove}
        onClose={onClose}
      />
    </>
  );
};

const StHorizonRule = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${Colors.lightGrey};
  margin-bottom: 30px;
`;

const StCommentContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  grid-column-gap: 30px;
`;

const StCommentName = styled.p`
  margin-top: 0px;
  margin-bottom: 6px;
  font-weight: 600;
`;

const StCommentDate = styled.p`
  font-size: 10px;
  color: ${Colors.grey};
  margin: 5px 0;
`;

const StCommentContent = styled.p`
  opacity: 0.8;
  max-width: 550px;
`;

const StLink = styled.span`
  margin-right: 10px;
  font-size: 12px;
  color: ${Colors.grey};
  font-weight: 600;
  cursor: pointer;
  line-height: 163.15%;
  text-decoration-line: underline;
  cursor: pointer;
`;

const Message = styled.span`
  color: red;
  display: inline-block;
  font-size: 14px;
  margin: 20px 0;
`;

export default React.memo(Comment);
