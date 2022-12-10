import Button from "../common/Button";
import { Colors } from "../../styles";
import Input from "../common/Input";
import styled from "styled-components";

const CommentSubmit = () => {
  return (
    <div style={{ marginBottom: "60px" }}>
      <form>
        <StSectionInfo>댓글등록</StSectionInfo>
        <StHorizonRule />
        <StInputsContainer>
          <StInputBox>
            <label>닉네임:</label>
            <Input type="text" placeholder="닉네임을 입력하세요" />
          </StInputBox>
          <StInputBox>
            <label>비밀번호:</label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </StInputBox>
        </StInputsContainer>
        <div>
          <StTextArea placeholder="댓글을 입력하세요" />
        </div>
        <div>
          <Button type="submit">등록하기</Button>
        </div>
      </form>
    </div>
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
