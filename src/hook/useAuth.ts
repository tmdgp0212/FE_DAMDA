import { validateToken } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '@/store/auth';

export const useAuth = () => {
  const { setUser, logout } = useAuthStore();
  const { mutate } = useMutation(validateToken, {
    onSuccess: (data) => {
      if (data.data.profileImage === '404.jpg') {
        data.data.profileImage = 'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg';
      }
      setUser(data.data);
    },
    onError: () => {
      console.log('로그아웃 상태입니다. 로그인해주세요');
      logout();
    },
  });

  return mutate;
};
