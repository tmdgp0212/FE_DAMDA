import { handleLogin, handleRedirect } from '@/utils/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Login() {
  const router = useRouter();

  useEffect(() => {
    handleRedirect(router);
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
