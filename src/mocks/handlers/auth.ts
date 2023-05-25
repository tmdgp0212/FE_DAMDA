import { rest } from 'msw';

// authHandler는 임시로 넣어둔 api라 작업 시 삭제해주세요!!
export const authHandler = [
  rest.get('/api/auth', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'success',
        data: { id: 1, username: 'testUser' },
      }),
    );
  }),
];
