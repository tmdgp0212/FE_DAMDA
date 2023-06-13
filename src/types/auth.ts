interface LoginRes {
  data: string;
}

interface ValidateRes {
  id: number;
  username: string;
  address: string;
  gender: string;
  phoneNumber: string;
  profileImage: string;
  role: 'USER' | 'ADMIN';
}
