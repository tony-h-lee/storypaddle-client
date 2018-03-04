import Request from 'utils/request';

export function signup(values) {
  const url = 'http://localhost:9000/api/users/';
  const r = new Request()
    .post()
    .setBody({ values })
    .setUrl(url);

  return r.then(
    () => r.resolve(),
    (err) => {
      console.log(err);
      r.reject();
    }
  );
}
