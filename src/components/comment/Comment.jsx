import React, { useCallback, useEffect, useState } from "react";
import { Colors } from "../../styles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __removeComment, __toggleEditComment } from "../../lib/commentApi";
import {
  removeComment,
  setIsModify,
  setIsRemove,
  setOnEdit,
} from "../../redux/modules/commentSlice";
import Modal from "../common/Modal";
import Input from "../common/Input";
import useInput from "../../hooks/useInput";

const Comment = ({ commentInfo }) => {
  const dispatch = useDispatch();
  let { isRemove, isModify } = useSelector((state) => state.comments);
  const { id, postId, comment, createdAt, userId, password, onEdit } =
    commentInfo;
  const [chkPassword, setChkPassword, onChangeChkPassword] = useInput("");
  const [updateComment, setUpdateComment, onChangeUpdateComment] = useInput(
    commentInfo.comment
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(setIsRemove(false));
    dispatch(setIsModify(false));
    cancelCommentModify();
  }, []);

  // 삭제여부 플래그 true
  const showRemovePopup = () => {
    dispatch(setIsRemove(true));
  };

  // 수정여부 플래그 true
  const showModifyPopup = () => {
    dispatch(setIsModify(true));
  };

  // 팝업을 닫는다
  const onClose = useCallback(() => {
    dispatch(
      isRemove ? setIsRemove(false) : isModify ? setIsModify(false) : ""
    );
    setChkPassword("");
    setMessage("");
  }, [dispatch, setChkPassword, isModify, isRemove]);

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

  // 수정 버튼 클릭 시 인풋박스를 활설화 시킨다.
  const showModifyForm = (id) => {
    console.log(id);
    const modifyComment = {
      id,
      onEdit: true,
    };
    dispatch(__toggleEditComment(modifyComment)).then((response) => {
      const { id, onEdit } = response.payload;
      dispatch(setOnEdit({ id, onEdit }));
    });
  };

  const hideModifyForm = () => {
    setUpdateComment(commentInfo.comment);
    cancelCommentModify();
  };

  const cancelCommentModify = () => {
    const modifyComment = {
      id,
      onEdit: false,
    };
    dispatch(__toggleEditComment(modifyComment)).then((response) => {
      const { id, onEdit } = response.payload;
      dispatch(setOnEdit({ id, onEdit }));
    });
  };
  // 저장 완료
  const onSave = (id) => {
    // dispatch(setOnEdit(false));
  };

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
                <StLink onClick={() => showModifyForm(id)}>수정</StLink>
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
