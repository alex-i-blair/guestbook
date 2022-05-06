import fetch from 'cross-fetch';
global.fetch = fetch;
import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  rest.post(`${process.env.SUPABASE_API_URL}/auth/v1/token`, (req, res, ctx) =>
    res(
      ctx.json({
        access_token: 'MOCK_TOKEN',
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: 'MOCK_REFRESH_TOKEN',
        user: {
          id: '4db45273-31a3-4d98-b7c7-8ef09b9942e0',
          aud: 'authenticated',
          role: 'authenticated',
          email: 'bclan11@gmail.com',
          email_confirmed_at: '2022-05-06T00:12:17.307725Z',
          phone: '',
          confirmed_at: '2022-05-06T00:12:17.307725Z',
          last_sign_in_at: '2022-05-06T19:56:20.168756946Z',
          app_metadata: {
            provider: 'email',
            providers: ['email'],
          },
          user_metadata: {},
          identities: [
            {
              id: '4db45273-31a3-4d98-b7c7-8ef09b9942e0',
              user_id: '4db45273-31a3-4d98-b7c7-8ef09b9942e0',
              identity_data: {
                sub: '4db45273-31a3-4d98-b7c7-8ef09b9942e0',
              },
              provider: 'email',
              last_sign_in_at: '2022-05-06T00:12:17.306055Z',
              created_at: '2022-05-06T00:12:17.306097Z',
              updated_at: '2022-05-06T00:12:17.3061Z',
            },
          ],
          created_at: '2022-05-06T00:12:17.303759Z',
          updated_at: '2022-05-06T19:56:20.169909Z',
        },
        expires_at: 1651870580,
      })
    )
  ),
  rest.get(`${process.env.SUPABASE_API_URL}/rest/v1/entries`, (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 159,
          guest_id: '4db45273-31a3-4d98-b7c7-8ef09b9942e0',
          content: 'stuff',
          created_at: '2022-05-06T18:49:32.124451+00:00',
        },
        {
          id: 158,
          guest_id: '4db45273-31a3-4d98-b7c7-8ef09b9942e0',
          content: 'test',
          created_at: '2022-05-06T18:49:28.410218+00:00',
        },
      ])
    )
  )
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
