import Request from 'utils/request';

export function login(values) {
  const url = 'http://localhost:9000/api/auth';
  return new Request()
    .setUrl(url)
    .setPost()
    .addHeader({ 'Content-Type': 'application/json' })
    .addBasicCredentials(values)
    .go();
}
