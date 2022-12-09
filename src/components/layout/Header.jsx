import styled from "styled-components";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <p>HOME</p>
        {/* TODO: 게시글 작성 페이지로 링크 추가 */}
        <p>글쓰기</p>
      </HeaderContainer>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  padding: 20px 90px 20px 90px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > p {
    font-weight: 700;
  }
`;

export default Header;
