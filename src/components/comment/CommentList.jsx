import { Colors } from "../../styles";
import styled from "styled-components";

const CommentList = () => {
  return (
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

export default CommentList;
