import Request from 'utils/request';

export function getNarrative(values) {
  const url = `http://localhost:9000/api/narratives/${values.id}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}

export function editNarrative(values, token) {
  const url = `http://localhost:9000/api/narratives/${values.narrative}`;
  return new Request()
    .setUrl(url)
    .setPut()
    .addHeader({ 'Content-Type': 'application/json' })
    .setToken(token)
    .setBody(values)
    .go();
}
