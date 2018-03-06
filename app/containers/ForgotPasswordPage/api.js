import Request from 'utils/request';

export function forgotPassword(values) {
  const url = 'http://localhost:9000/api/reset-password';
  return new Request()
    .setUrl(url)
    .setPost()
    .addHeader({ 'Content-Type': 'application/json' })
    .setBody(values)
    .go();
}
