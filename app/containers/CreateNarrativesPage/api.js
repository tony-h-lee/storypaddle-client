import Request from 'utils/request';

export function createNarrative(values) {
  const url = 'http://localhost:9000/api/narratives';
  return new Request()
    .setUrl(url)
    .setPost()
    .addHeader({ 'Content-Type': 'application/x-www-form-urlencoded' })
    .setToken(values.token)
    .setBody(values)
    .go();
}