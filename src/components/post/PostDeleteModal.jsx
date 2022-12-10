import Input from "../common/Input";
import Modal from "../common/Modal";
import { __deletePost } from "../../lib/postApi";
import { async } from "q";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router";

const PostDeleteModal = ({ onClose, visible, id }) => {
  const [password, , changePassword] = useInput("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!password) {
      alert("비밀번호를 입력하세요");
      return;
    }
    dispatch(__deletePost({ id: id, password: password }));
    navigate(-1);
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
