import axios from 'axios';
import { instance } from './instance';

/**
 * @description: 인가코드를 받아 AccessToken을 요청
 * @param {string} code : 인가코드
 * @return 로그인정보 data
 */
export const getToken = async (code: string) => {
  try {
    const response = await instance.get<LoginRes>(`/member/code?code=${code}`);
    // const response = await axios.get(`http://localhost:8080/api/v1/member/code?code=${code}`, {
    //   withCredentials: true,
    // });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch access token from Kakao');
  }
};

/**
 * @description: 헤더에 담긴 토큰을 검증하고, 유저정보를 받아옴
 */
export const validateToken = async (logout: () => void) => {
  try {
    const response = await instance.get<ValidateRes>('/auth/me');
    // const response = await axios.get('http://localhost:8080/api/v1/auth/me');
    console.log(response);
    return response.data;
  } catch (error) {
    logout();
    console.error('Unverified token');
  }
};
