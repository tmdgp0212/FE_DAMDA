import { handleLogin } from '@/utils/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getToken } from '@/apis/auth';
import * as S from './../../styles/Login.styled';
import { useAuth } from '@/hook/useAuth';
import useRouteStore from '@/store/routeHistory';

function Login() {
  const router = useRouter();
  const { history } = useRouteStore();
  const getUserData = useAuth();

  const handleRedirect = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      try {
        await getToken(code);
        getUserData();
        router.push(history[0]);
      } catch (err) {
        throw new Error('Failed to fetch access token from Kakao');
      }
    } else {
      handleLogin();
    }
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <S.LoginPage>
      <h2>
        3초 후 <br /> 열다 카카오톡 서비스로 이동합니다 :)
      </h2>

      <div className="login_button">
        <p>
          기다려도 로그인이 되지 않는다면? <br /> 아래 버튼을 눌러 로그인 해주세요
        </p>
        <button className="ir-text" onClick={handleLogin}>
          Kakao 로그인
        </button>
      </div>
    </S.LoginPage>
  );
}

export default Login;
