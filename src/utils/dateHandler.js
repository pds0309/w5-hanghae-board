// 날짜 생성 함수\
export const dateFormatGenerator = () => {
  const today = new Date();
  const format = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()} T${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  return format;
};
