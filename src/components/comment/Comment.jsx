import React, { useCallback, useEffect, useState } from "react";
import { Colors } from "../../styles";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Modal from "../common/Modal";
import Input from "../common/Input";
import useInput from "../../hooks/useInput";
import useDispatchCommentApi from "../../hooks/useDispatchCommentApi";
import useShowPopup from "../../hooks/useShowPopup";

const Comment = ({ commentInfo }) => {
  const { comments, error } = useSelector((state) => state.comments);
  const { id, comment, createdAt, userId } = commentInfo;
  const [chkPassword, setChkPassword, onChangeChkPassword] = useInput("");
  const [updateComment, setUpdateComment, onChangeUpdateComment] = useInput(
    commentInfo.comment
  );
  const [message, setMessage] = useState("");
  const [isRemove, setIsRemove] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [onEdit, setOnEdit] = useState(false);

  useEffect(() => {
    setIsRemove(false);
    setIsModify(false);
    setOnEdit(false);
  }, [comments]);

  // 삭제여부 플래그 true
  const showRemovePopup = useShowPopup(setMessage, setChkPassword, setIsRemove);

  // 수정여부 플래그 true
  const showModifyPopup = useShowPopup(setMessage, setChkPassword, setIsModify);

  // 팝업을 닫는다
  const onClose = useCallback(() => {
    if (isRemove) {
      setIsRemove(false);
    } else if (isModify) {
      setIsModify(false);
    }

    setChkPassword("");
    setMessage("");
  }, [setChkPassword, isModify, isRemove]);

  // 삭제 버튼 클릭 시
  const onRemove = useDispatchCommentApi({
    id,
    chkPwd: chkPassword,
    isRemove: true,
    isModify: false,
    flagHandler: setIsRemove,
    onClose,
  });

  // 저장 버튼 클릭 시
  const onSave = useDispatchCommentApi({
    id,
    updateComment,
    chkPwd: chkPassword,
    isRemove: false,
    isModify: true,
    flagHandler: setIsModify,
    editHandler: setOnEdit,
    onClose,
  });

  // 수정 버튼 클릭 시 인풋박스를 활성화 시킨다.
  const showModifyForm = useCallback(() => {
    setOnEdit(true);
  }, [setOnEdit]);

  // 취소 버튼 클릭 시 인풋박스를 비활성화 시키고 입력한 내용을 원복한다.
  const hideModifyForm = useCallback(() => {
    setUpdateComment(commentInfo.comment);
    setOnEdit(false);
  }, [setUpdateComment, commentInfo.comment, setOnEdit]);

  return (
    <>
      <div>
        <StCommentContainer>
          <div style={{ padding: "16px" }}>
            <StCommentName>{userId}</StCommentName>
            <StCommentDate>{createdAt}</StCommentDate>
            <div>
              {onEdit ? (
                <>
                  <StLink onClick={showModifyPopup}>저장</StLink>
                  <StLink onClick={hideModifyForm}>취소</StLink>
                </>
              ) : (
                <StLink onClick={showModifyForm}>수정</StLink>
              )}

              <StLink onClick={showRemovePopup}>삭제</StLink>
            </div>
          </div>
          <div>
            {onEdit ? (
              <Input
                type="text"
                value={updateComment}
                onChange={onChangeUpdateComment}
              />
            ) : (
              <StCommentContent>{comment}</StCommentContent>
            )}
          </div>
        </StCommentContainer>
        <StHorizonRule style={{ maxWidth: "800px" }} />
      </div>
      {/* 모달 창을 재사용하기 위해 수정인지 삭제인지 판단한다 */}
      <Modal
        visible={isRemove ? true : isModify ? true : false}
        title="비밀번호를 입력하세요."
        children={
          <>
            <div>
              <p>비밀번호</p>
              <Input
                type="password"
                width="300px"
                value={chkPassword}
                onChange={onChangeChkPassword}
                required
              />
            </div>
            <Message>{message}</Message>
          </>
        }
        onSubmit={isRemove ? onRemove : onSave}
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
