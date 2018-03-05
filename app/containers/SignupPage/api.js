import Request from 'utils/request';

export function signup(values) {
  const url = 'http://localhost:9000/api/users';
  return new Request()
    .setUrl(url)
    .addHeader({ 'Content-Type': 'application/json' })
    .setBody({ ...values })
    .setPost()
    .go();
}
