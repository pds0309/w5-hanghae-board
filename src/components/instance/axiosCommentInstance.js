import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL + "/comments",
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default instance;
