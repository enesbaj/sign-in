import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://dummy-api/signin', () => {
    return new HttpResponse(
      JSON.stringify({
        loggedIn: true,
      }),
      {
        status: 200,
      }
    );
  }),
  // http.post('https://dummy-api/signin', () => {
  //   return new HttpResponse(
  //     JSON.stringify({
  //       loggedIn: false,
  //       message: 'Invalid credentials',
  //     }),
  //     {
  //       status: 200,
  //     }
  //   );
  // }),
];
