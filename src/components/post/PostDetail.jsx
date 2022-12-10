import Button from "../common/Button";
import { Colors } from "../../styles";
import styled from "styled-components";

const PostDetail = () => {
  return (
    <div>
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
    </div>
  );
};

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

export default PostDetail;
