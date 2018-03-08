import Request from 'utils/request';

export function resetPassword(values, token) {
  const url = `http://localhost:9000/api/password-reset/${token}`;
  return new Request()
    .setUrl(url)
    .setUpdate()
    .addHeader({ 'Content-Type': 'application/json' })
    .setBody({ ...values })
    .go();
}
