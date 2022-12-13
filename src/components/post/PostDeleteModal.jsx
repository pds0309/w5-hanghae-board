import Input from "../common/Input";
import Modal from "../common/Modal";
import { __deletePost } from "../../lib/postApi";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router";
import useReduxModification from "../../hooks/useReduxModification";
import { initDeleteSuccess } from "../../redux/modules/postSlice";
import { useEffect } from "react";

const PostDeleteModal = ({ onClose, visible, id }) => {
  const [password, , changePassword] = useInput("");
  const navigate = useNavigate();
  const { deleteSuccess, error, dispatcher } = useReduxModification(
    __deletePost({ id: id, password: password }),
    "posts",
    initDeleteSuccess
  );

  useEffect(() => {
    if (error && !deleteSuccess) {
      alert(error.message);
      return;
    }
    if (deleteSuccess) {
      navigate(-1);
    }
  }, [deleteSuccess, error, onClose, navigate]);

  const handleSubmit = () => {
    if (!password) {
      alert("비밀번호를 입력하세요");
      return;
    }
    dispatcher();
  };

  return (
    <Modal
      title="게시글 삭제"
      onClose={onClose}
      visible={visible}
      onSubmit={handleSubmit}
    >
      <StLabel>비밀번호 입력</StLabel>{" "}
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        height="38px"
        width="250px"
        value={password}
        onChange={(e) => changePassword(e)}
      />
    </Modal>
  );
};

const StLabel = styled.label`
  display: block;
  font-weight: 600;
  margin: 30px 0 12px 0;
`;

export default PostDeleteModal;
