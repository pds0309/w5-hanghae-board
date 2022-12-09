import Button from "../components/common/Button";
import { Colors } from "../styles";
import Section from "../components/layout/Section";
import styled from "styled-components";

const Detail = () => {
  return (
    <Section>
      <StContainer>
        {/* #################################### 게시글 상세 ################################ */}
        <h1>
          매력적인 성배님의 웃음소리는 내 마음속 한줄기의 빛이 되어 나의 심금을
          울렸다.
        </h1>
        <StWriteInfoBox>
          <p>
            <span style={{ color: Colors.grey }}>작성자:&nbsp;</span>
            이름이몇글자까지될까나
          </p>
          <p style={{ color: Colors.grey }}>2022/11/30 12: 27</p>
        </StWriteInfoBox>
        <StHorizonRule />
        <div style={{ minHeight: "300px" }}>
          <p style={{ lineHeight: "180%" }}>
            내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물
            <br />
            내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물내용물
            <br />
            내용물 맛있는 물
            <br />
            <br />
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
          </p>
        </div>
        <StButtonsContainer>
          <Button btnTheme="secondary">수정하기</Button>
          <Button btnTheme="secondary">삭제하기</Button>
        </StButtonsContainer>
        <StHorizonRule />
        {/* #################################### 댓글등록 ################################ */}
        <br />
        <div style={{ marginBottom: "60px" }}>
          <form>
            <StSectionInfo>댓글등록</StSectionInfo>
            <StHorizonRule />
            <StInputsContainer>
              <StInputBox>
                <label>닉네임:</label>
                <StSmallInput type="text" placeholder="닉네임을 입력하세요" />
              </StInputBox>
              <StInputBox>
                <label>비밀번호:</label>
                <StSmallInput
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
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
        {/* #################################### 댓글목록 ################################ */}
        <div style={{ marginBottom: "60px" }}>
          <StSectionInfo>전체댓글</StSectionInfo>
          <StHorizonRule />
          {/* #################################### 댓글1  */}
          <div>
            <StCommentContainer>
              <div style={{ padding: "16px" }}>
                <StCommentName>작성자의이름이다다다</StCommentName>
                <StCommentDate>2022/11/30 12: 27</StCommentDate>
                <div>
                  <StLink>수정</StLink>
                  <StLink>삭제</StLink>
                </div>
              </div>
              <div>
                <StCommentContent>
                  댓글댓글댓글댓글댓글댓글댓글댓글댓글
                  댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                  댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                </StCommentContent>
              </div>
            </StCommentContainer>
            <StHorizonRule style={{ maxWidth: "800px" }} />
          </div>
          {/* #################################### 댓글1  */}
          <div>
            <StCommentContainer>
              <div style={{ padding: "16px" }}>
                <StCommentName>작성자의이름이다다다</StCommentName>
                <StCommentDate>2022/11/30 12: 27</StCommentDate>
                <div>
                  <StLink>수정</StLink>
                  <StLink>삭제</StLink>
                </div>
              </div>
              <div>
                <StCommentContent>
                  댓글댓글댓글댓글댓글댓글댓글댓글댓글
                  댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                  댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                </StCommentContent>
              </div>
            </StCommentContainer>
            <StHorizonRule style={{ maxWidth: "800px" }} />
          </div>
          {/* #################################### 댓글1  */}
          <div>
            <StCommentContainer>
              <div style={{ padding: "16px" }}>
                <StCommentName>김갑환</StCommentName>
                <StCommentDate>2022/11/30 12: 27</StCommentDate>
                <div>
                  <StLink>수정</StLink>
                  <StLink>삭제</StLink>
                </div>
              </div>
              <div>
                <StCommentContent>ㅇㅇ</StCommentContent>
              </div>
            </StCommentContainer>
            <StHorizonRule style={{ maxWidth: "800px" }} />
          </div>
        </div>
      </StContainer>
    </Section>
  );
};

const StContainer = styled.div`
  padding: 30px 60px 30px 60px;
`;

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

const StSmallInput = styled.input`
  border-radius: 6px;
  border: 2px solid ${Colors.lightGrey};
  font-size: 12px;
  line-height: 163.15%;
  padding: 8px 0 8px 8px;
  min-width: 150px;
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
`;

export default Detail;
