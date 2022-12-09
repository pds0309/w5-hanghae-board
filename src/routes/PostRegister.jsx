import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Section from "../components/layout/Section";
import { Colors } from "../styles/colors";

const Row = styled.div`
  margin: 35px 0;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 7px;
`;

const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #bbc8d4;
  border-radius: 4px;
`;

const MarginR = styled.span`
  display: inline-block;
  margin-right: 15px;
`;
const PostRegister = () => {
  return (
    <Section>
      <h1 style={{ color: Colors.black }}>게시글 등록</h1>
      <form>
        <Row>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            width="720px"
            height="26px"
          />
        </Row>
        <Row>
          <Label>작성자</Label>
          <Input
            type="text"
            placeholder="2~10글자의 한글/영어/숫자"
            width="320px"
            height="26px"
          />
        </Row>
        <Row>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="한글 또는 영문자와 숫자 4~16자리"
            width="320px"
            height="26px"
          />
        </Row>
        <Row>
          <Label>내용</Label>
          <Input
            placeholder="내용을 입력하세요"
            width="720px"
            height="250px"
          ></Input>
        </Row>
        <Row>
          <Button>등록하기</Button>
          <MarginR></MarginR>
          <Button btnTheme="secondary">뒤로가기</Button>
        </Row>
      </form>
    </Section>
  );
};

export default PostRegister;
