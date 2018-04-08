import Request from 'utils/request';

export function getNarrative(values) {
  const url = `http://localhost:9000/api/narratives/${values.id}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}

export function joinRole(values) {
  const url = `http://localhost:9000/api/narratives/roles/${values.id}`;
  return new Request()
    .setUrl(url)
    .setPut()
    .setBody({ name: values.name })
    .addHeader({ 'Content-Type': 'application/json' })
    .setToken(values.token)
    .go();
}
