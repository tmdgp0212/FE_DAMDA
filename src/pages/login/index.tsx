import axios from 'axios';
import querystring from 'querystring';
import { useEffect } from 'react';

function Login() {
  const handleLogin = async () => {
    const REST_API_KEY = '56a73d5166d4c92264833034100ab59b';
    const REDIRECT_URI = 'http://localhost:3000/login';
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

  const getToken = async (code: string) => {
    try {
      const response = await axios.get(`https://api.damda.store/api/v1/member/code?code=${code}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch access token from Kakao');
    }
  };

  const handleRedirect = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      try {
        const accessToken = await getToken(code);
        // 액세스 토큰을 사용하여 필요한 작업을 수행
        console.log('Access Token:', accessToken);
      } catch (error) {
        console.error('Failed to fetch access token:', error);
      }
    } else {
      handleLogin();
    }
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <div>
      <h2>로그인 중 입니다</h2>
      <div className="login_button">
        <p>로그인이 되지 않는다면? 아래 버튼을 눌러 로그인 해주세요</p>
        <button onClick={handleLogin}>Kakao 로그인</button>
      </div>
    </div>
  );
}

export default Login;
