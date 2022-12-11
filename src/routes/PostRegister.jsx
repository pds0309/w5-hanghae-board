import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Section from "../components/layout/Section";
import { Colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";
import { dateFormatGenerator } from "../utils/dateHandler";

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
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: 0,
    title: "",
    content: "",
    userId: "",
    password: "",
    createdAt: "",
  });

  const sendData = () => {
    if (!data.userId && !data.password) {
      alert("아이디와 비밀번호를 형식에 맞게 기입해주세요");
    } else if (!data.userId) {
      alert("작성자를 형식에 맞게 입력해주세요");
    } else if (!data.password) {
      alert("비밀번호를 형식에 맞게 입력해주세요");
    } else if (!data.title || !data.content) {
      alert("제목과 내용을 입력해주세요");
    } else {
      axios.post("http://localhost:3001/posts", {
        ...data,
        createdAt: dateFormatGenerator(),
      });
      alert("등록이 완료되었습니다");
      navigate("/");
    }
  };

  function onChangeRestValues(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function onChangeIdCheck(e) {
    const userIdCheck = /^[A-Za-zㄱ-ㅎ가-힣0-9+]{2,10}$/;
    if (userIdCheck.test(e.target.value)) {
      setData((prev) => ({ ...prev, userId: e.target.value }));
    } else {
      setData((prev) => ({ ...prev, userId: "" }));
    }
  }

  function onChangePasswordCheck(e) {
    const userPasswordCheck = /^[A-Za-zㄱ-ㅎ가-힣0-9+]{4,16}$/;
    if (userPasswordCheck.test(e.target.value)) {
      console.log("o");
      setData((prev) => ({ ...prev, password: e.target.value }));
    } else {
      setData((prev) => ({ ...prev, password: "" }));
    }
  }

  return (
    <Section>
      <h1 style={{ color: Colors.black }}>게시글 등록</h1>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Row>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            width="720px"
            height="26px"
            name="title"
            onChange={onChangeRestValues}
          />
        </Row>
        <Row>
          <Label>작성자</Label>
          <Input
            type="text"
            placeholder="2~10글자의 한글/영어/숫자"
            width="320px"
            height="26px"
            // name="userId"
            onChange={onChangeIdCheck}
          />
        </Row>
        <Row>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="한글 또는 영문자와 숫자 4~16자리"
            width="320px"
            height="26px"
            // name="password"
            onChange={onChangePasswordCheck}
          />
        </Row>
        <Row>
          <Label>내용</Label>
          <Input
            placeholder="내용을 입력하세요"
            width="720px"
            height="250px"
            name="content"
            onChange={onChangeRestValues}
          ></Input>
        </Row>
        <Row>
          <Button onClick={sendData}>등록하기</Button>
          <MarginR></MarginR>
          <Button onClick={() => navigate("/")} btnTheme="secondary">
            뒤로가기
          </Button>
        </Row>
      </form>
    </Section>
  );
};

export default PostRegister;
