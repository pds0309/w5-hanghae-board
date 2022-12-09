import React from "react";
import styled from "styled-components";
import Section from "../components/layout/Section";

const GeneralLists = () => {
  return (
    <Section>
      <StHeader>
        <StH1>전체글 목록</StH1>
      </StHeader>
      <hr />
      <div>
        <div>
          <StP fontSize="20px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="20px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="20px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="20px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="20px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="20px">리스트는 몇글자까지 간으한가</StP>
          <StSpaceBtw>
            <StP>리스트1</StP>
            <StP>2022/12/09/ 00: 00</StP>
          </StSpaceBtw>
          <hr />
        </div>
        <div>
          <StP fontSize="20px">리스트는 몇글자까지 간으한가</StP>
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
    </Section>
  );
};

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
  font-size: ${(prop) => prop.fontSize || "14px"};
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
