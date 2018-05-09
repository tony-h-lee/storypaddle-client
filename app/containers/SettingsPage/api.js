import Request from 'utils/request';

export function changePassword(values) {
  const url = `http://localhost:9000/api/users/${values.userId}/password`;
  return new Request()
    .setUrl(url)
    .setPut()
    .addHeader({ 'Content-Type': 'application/json' })
    .addBasicCredentials({ email: values.email, password: values.oldPassword })
    .setBody({ password: values.password })
    .go();
}
