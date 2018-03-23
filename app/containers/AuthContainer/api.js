import Request from 'utils/request';

export function getMe(values) {
  const url = 'http://localhost:9000/api/users/me';
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .setToken(values.token)
    .go();
}
