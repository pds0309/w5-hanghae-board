import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { setError, setResultMessage } from "../redux/modules/commentSlice";

const Error = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setResultMessage(""));
      dispatch(setError(""));
    };
  }, [dispatch]);

  return <ErrorMessage>{state.error}</ErrorMessage>;
};

const ErrorMessage = styled.div`
  background-color: tomato;
  color: #fff;
  text-align: center;
  margin: 100px auto;
  padding: 15px 0;
  font-size: 16px;
`;

export default Error;
