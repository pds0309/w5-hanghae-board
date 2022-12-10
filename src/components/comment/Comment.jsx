import React from "react";
import { Colors } from "../../styles";
import styled from "styled-components";

const Comment = ({ commentInfo }) => {
  console.log(commentInfo);
  const { id, postId, comment, createdAt, userId, password } = commentInfo;
  return (
    <>
      {/* #################################### 댓글1  */}
      <div>
        <StCommentContainer>
          <div style={{ padding: "16px" }}>
            <StCommentName>{userId}</StCommentName>
            <StCommentDate>{createdAt}</StCommentDate>
            <div>
              <StLink>수정</StLink>
              <StLink>삭제</StLink>
            </div>
          </div>
          <div>
            <StCommentContent>{comment}</StCommentContent>
          </div>
        </StCommentContainer>
        <StHorizonRule style={{ maxWidth: "800px" }} />
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

export default React.memo(Comment);
