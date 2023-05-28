// 액션 타입 정의
export const RESERVE_DRONE = "RESERVE_DRONE";

// 액션 생성자 함수
export const reserveDrone = (data) => ({
  type: RESERVE_DRONE,
  payload: data,
});
