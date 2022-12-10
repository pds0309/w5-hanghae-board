import CommentList from "../components/comment/CommentList";
import CommentSubmit from "../components/comment/CommentSubmit";
import PostDetail from "../components/post/PostDetail";
import Section from "../components/layout/Section";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <Section>
      <StContainer>
        {/* #################################### 게시글 상세 ################################ */}
        <PostDetail postId={id} />
        {/* #################################### 댓글등록 ################################ */}
        <br />
        <CommentSubmit postId={id} />
        {/* #################################### 댓글목록 ################################ */}
        <CommentList postId={id} />
      </StContainer>
    </Section>
  );
};

const StContainer = styled.div`
  padding: 30px 60px 30px 60px;
`;

export default Detail;
