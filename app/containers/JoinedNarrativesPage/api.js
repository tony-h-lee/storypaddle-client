import Request from 'utils/request';

export function getJoinedNarratives(values) {
  const url = 'http://localhost:9000/api/users/me/joined/';
  return new Request()
    .setUrl(url)
    .setGet()
    .setToken(values.token)
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
