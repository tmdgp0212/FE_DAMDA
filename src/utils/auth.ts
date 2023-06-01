import axios from 'axios';
import { NextRouter } from 'next/router';
import querystring from 'querystring';

const REST_API_KEY = '60f77739714285a54306be265e701791';
const REDIRECT_URI = 'http://localhost:3000/login';

/**
 * @description: 카카오에 인가코드를 요청하고, 리다이렉트URI로 이동하도록 함
 */
export const handleLogin = async () => {
  const params = {
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
  };

  const queryString = querystring.stringify(params);

  const loginUrl = `https://kauth.kakao.com/oauth/authorize?${queryString}`;

  try {
    window.location.href = loginUrl;
  } catch (error) {
    console.error('Failed to redirect to Kakao login:', error);
  }
};

/**
 * @description: 인가코드를 받아 AccessToken을 요청
 * @param {string} code : 인가코드
 * @return 로그인정보 data
 */
export const getToken = async (code: string) => {
  try {
    const response = await axios.get(`https://api.damda.store/api/v1/member/code?code=${code}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch access token from Kakao');
  }
};

/**
 * @description 로그인이 완료되면 accessToken을 받아 저장하고, 메인 페이지로 리다이렉트
 * @param router
 */
export const handleRedirect = async (router: NextRouter) => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  if (code) {
    try {
      const accessToken = await getToken(code);
      // 액세스 토큰을 사용하여 필요한 작업을 수행
      console.log('Access Token:', accessToken);
      router.push('/');
    } catch (error) {
      console.error('Failed to fetch access token:', error);
    }
  } else {
    handleLogin();
  }
};
