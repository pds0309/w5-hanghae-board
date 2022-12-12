import { useCallback } from "react";

const useShowPopup = (msgHandler, chkPwdHandler, displayHandler) => {
  const handler = useCallback(() => {
    msgHandler("");
    chkPwdHandler("");
    displayHandler(true);
  }, [msgHandler, chkPwdHandler, displayHandler]);

  return handler;
};

export default useShowPopup;
