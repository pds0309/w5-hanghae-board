import React from "react";
import styled from "styled-components";

const GeneralLists = () => {
  return (
    <StContainer>
      <StHeader>
        <StH1>전체글 목록</StH1>
      </StHeader>
      <hr />
      <div>
        <div>
          <StP fontSize="26px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="26px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="26px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="26px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="26px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="26px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="26px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
      </div>

      <StPaging>
        <p>{`< `}</p>
        <>
          <StBtn>1</StBtn>
          <StBtn>2</StBtn>
          <StBtn>3</StBtn>
        </>
        <p>{` >`}</p>
      </StPaging>
    </StContainer>
  );
};

const StContainer = styled.div`
  max-width: 1160px;
  width: 95%;
  margin: 0 auto;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StH1 = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  color: grey;
`;

const StP = styled.p`
  font-size: ${(prop) => prop.fontSize || "16px"};
  margin: 15px 0 0;

  /* overflow: hidden; */
`;

const StSpaceBtw = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
`;

const StPaging = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StBtn = styled.button`
  background-color: white;
  border: 0;
  cursor: pointer;
`;

export default GeneralLists;
