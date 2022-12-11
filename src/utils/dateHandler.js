// 날짜 생성 함수\
export const dateFormatGenerator = () => {
  const today = new Date();
  const format = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}T${setTimeLeftPadding(
    today.getHours()
  )}:${setTimeLeftPadding(today.getMinutes())}:${today.getSeconds()}`;
  return format;
};

function setTimeLeftPadding(num) {
  return (num + "").padStart(2, "0");
}

export const getReadableDateByFormmatedDate = (formattedDate) => {
  return formattedDate.substring(0, 19).replace(/-/g, "/").replace("T", " ");
};
