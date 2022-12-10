import Button from "../common/Button";
import { Colors } from "../../styles";
import Input from "../common/Input";
import styled from "styled-components";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/modules/commentSlice";
import { __addComment } from "../../lib/commentApi";
import useInput from "../../hooks/useInput";

const CommentSubmit = ({ postId }) => {
  const dispatch = useDispatch();
  const [userId, setUserId, onChangeUserId] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");
  const [comment, setComment, onChangeComment] = useInput("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: uuid(),
      postId,
      comment,
      userId,
      password,
      createdAt: dateFormatGenerator(),
    };
    // 댓글 등록 API 요청
    dispatch(__addComment(newComment))
      .then((response) => {
        const comment = response.payload;
        dispatch(addComment(comment));
        // 입력 폼 초기화
        setUserId("");
        setPassword("");
        setComment("");
        // TODO: 컴포넌트로 alert창 만들기
        alert("댓글 작성이 정상적으로 되었습니다.");
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div style={{ marginBottom: "60px" }}>
      <form onSubmit={onSubmit}>
        <StSectionInfo>댓글등록</StSectionInfo>
        <StHorizonRule />
        <StInputsContainer>
          <StInputBox>
            <label>닉네임:</label>
            <Input
              type="text"
              placeholder="닉네임을 입력하세요"
              value={userId}
              onChange={onChangeUserId}
              required
            />
          </StInputBox>
          <StInputBox>
            <label>비밀번호:</label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={onChangePassword}
              required
            />
          </StInputBox>
        </StInputsContainer>
        <div>
          <StTextArea
            placeholder="댓글을 입력하세요"
            value={comment}
            onChange={onChangeComment}
            required
          />
        </div>
        <div>
          <Button type="submit">등록하기</Button>
        </div>
      </form>
    </div>
  );
};

// 날짜 생성 함수
const dateFormatGenerator = () => {
  const today = new Date();
  const format = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()} T${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  return format;
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

const StInputsContainer = styled.div`
  display: flex;
  grid-column-gap: 30px;
`;

const StInputBox = styled.div`
  display: flex;
  grid-column-gap: 8px;
  align-items: center;
`;

const StTextArea = styled.textarea`
  resize: none;
  min-width: 80%;
  padding: 16px;
  border-radius: 6px;
  border: 2px solid ${Colors.lightGrey};
  min-height: 80px;
  margin: 16px auto;
`;

export default CommentSubmit;
