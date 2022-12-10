import { Colors } from "../../styles";
import Input from "../common/Input";
import Modal from "../common/Modal";
import { __updatePost } from "../../lib/postApi";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";

const PostUpdateModal = ({ onClose, visible, id, title, content }) => {
  const [inputTitle, , changeInputTitle] = useInput(title);
  const [inputContent, , changeInputContent] = useInput(content);
  const [password, , changePassword] = useInput("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!inputTitle || !inputContent) {
      alert("제목 또는 내용을 입력하세요");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력하세요");
      return;
    }
    await dispatch(
      __updatePost({
        id: id,
        title: inputTitle,
        content: inputContent,
        password,
      })
    );
    onClose();
  };
  return (
    <Modal
      title={"게시글 수정"}
      onClose={onClose}
      visible={visible}
      onSubmit={handleSubmit}
    >
      <StLabel>제목</StLabel>
      <Input
        placeholder="제목을 입력하세요"
        height="38px"
        width="100%"
        value={inputTitle}
        onChange={(e) => changeInputTitle(e)}
      />
      <StLabel>비밀번호 입력</StLabel>{" "}
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        height="38px"
        width="100%"
        value={password}
        onChange={(e) => changePassword(e)}
      />
      <StLabel>내용</StLabel>
      <StTextArea
        placeholder="내용을 입력하세요"
        value={inputContent}
        onChange={(e) => changeInputContent(e)}
      />
    </Modal>
  );
};

const StLabel = styled.label`
  display: block;
  font-weight: 600;
  margin: 30px 0 12px 0;
`;

const StTextArea = styled.textarea`
  resize: none;
  width: 95%;
  padding: 16px;
  border-radius: 6px;
  border: 2px solid ${Colors.lightGrey};
  min-height: 200px;
  max-height: 200px;
`;

export default PostUpdateModal;
