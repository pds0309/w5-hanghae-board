import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { __modifyComment, __removeComment } from "../lib/commentApi";
import { modifyComment, removeComment } from "../redux/modules/commentSlice";

const useDispatchCommentApi = ({
  id, // 삭제 또는 수정할 댓글의 아이디디
  updateComment, // 수정할 댓글
  chkPwd, // 사용자가 입력한 패스워드
  isRemove, // 삭제 플래그
  isModify, // 수정 플래그
  flagHandler, // 플래그 핸들러
  msgHandler, // 메시지 핸들러
  chkPwdHandler, // 패스워드 확인 핸들러
  editHandler, // 편집여부 핸들러
  onClose, // 팝업 종료
}) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    // 입력값을 확인한다.
    if (chkPwd === "") {
      flagHandler(true); // 팝업을 계속 띄운다.
    } else {
      if (isRemove) {
        // 비밀번호가 같으면 삭제한다.
        // 댓글 삭제 API 요청
        dispatch(__removeComment({ id: id, password: chkPwd }));
        dispatch(removeComment(id)); // 화면의 댓글 목록 데이터 동기화
        onClose();
      } else if (isModify) {
        // 비밀번호가 같으면 수정한다.
        // 댓글 수정 API 요청
        dispatch(
          __modifyComment({ id, comment: updateComment, password: chkPwd })
        );
        dispatch(modifyComment({ id, comment: updateComment })); // 화면의 댓글 목록 데이터 동기화
        onClose();
        editHandler(false);
      }
    }
  }, [
    dispatch,
    id,
    updateComment,
    chkPwd,
    isRemove,
    isModify,
    flagHandler,
    editHandler,
    onClose,
  ]);
  return handler;
};

export default useDispatchCommentApi;
