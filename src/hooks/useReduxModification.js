import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useReduxModification = (reducer, slice, initFunc) => {
  const { updateSuccess, deleteSuccess, error } = useSelector(
    (state) => state[slice]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(initFunc());
  }, [initFunc, dispatch]);

  const dispatcher = () => {
    dispatch(reducer);
  };

  return {
    dispatcher,
    updateSuccess,
    deleteSuccess,
    error,
  };
};
export default useReduxModification;
