import { handleLogin } from '@/utils/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getToken } from '@/apis/auth';
import useAuthStore from '@/store/auth';
import * as S from './../../styles/Login.styled';

function Login() {
  const router = useRouter();
  const { setUser } = useAuthStore((state) => state);

  const handleRedirect = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      try {
        const user = await getToken(code);
        setUser(user.data);
        router.push('/');
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
