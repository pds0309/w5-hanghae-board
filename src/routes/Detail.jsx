import CommentList from "../components/comment/CommentList";
import CommentSubmit from "../components/comment/CommentSubmit";
import PostDetail from "../components/post/PostDetail";
import Section from "../components/layout/Section";
import styled from "styled-components";

const Detail = () => {
  return (
    <Section>
      <StContainer>
        {/* #################################### 게시글 상세 ################################ */}
        <PostDetail />
        {/* #################################### 댓글등록 ################################ */}
        <br />
        <CommentSubmit postId="1" />
        {/* #################################### 댓글목록 ################################ */}
        <CommentList postId="1" />
      </StContainer>
    </Section>
  );
};

const StContainer = styled.div`
  padding: 30px 60px 30px 60px;
`;

export default Detail;
