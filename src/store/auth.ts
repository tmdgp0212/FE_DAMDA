import create from 'zustand';

export interface UserState {
  isLogin: boolean;
  profileImage: string;
}

export interface AuthStore {
  user: UserState;
  setUser: (image: string) => void;
  logout: () => void;
}

const baseImage = 'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg';

const useAuthStore = create<AuthStore>((set, get) => ({
  user: {
    isLogin: false,
    profileImage: baseImage,
  },
  setUser: (image: string) =>
    set({
      user: {
        isLogin: true,
        profileImage: image === '404.jpg' ? baseImage : image,
      },
    }),
  logout: () =>
    set({
      user: {
        isLogin: false,
        profileImage: baseImage,
      },
    }),
}));

export default useAuthStore;
