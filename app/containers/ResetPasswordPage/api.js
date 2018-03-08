import Request from 'utils/request';

export function resetPassword(values) {
  const url = `http://localhost:9000/api/password-reset/${values.token}`;
  return new Request()
    .setUrl(url)
    .setUpdate()
    .addHeader({ 'Content-Type': 'application/json' })
    .setBody({ password: values.password })
    .go();
}
