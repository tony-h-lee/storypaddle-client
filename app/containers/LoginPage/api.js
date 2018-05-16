import Request from 'utils/request';

export function login(values) {
  const url = 'http://localhost:9000/api/auth/';
  return new Request()
    .setUrl(url)
    .setPost()
    .addBasicCredentials(values)
    .go();
}
