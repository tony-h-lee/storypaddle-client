import Request from 'utils/request';

export function getMyNarratives(values) {
  const url = 'http://localhost:9000/api/users/me/owned/';
  return new Request()
    .setUrl(url)
    .setGet()
    .setToken(values.token)
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
