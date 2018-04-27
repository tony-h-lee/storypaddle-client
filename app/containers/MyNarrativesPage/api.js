import Request from 'utils/request';

export function getMyNarratives(values) {
  const url = `http://localhost:9000/api/narratives?author=${values.author}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .setToken(values.token)
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}


export function deleteNarrative(values) {
  const url = `http://localhost:9000/api/narratives/${values.narrative}`;
  return new Request()
    .setUrl(url)
    .setDelete()
    .setToken(values.token)
    .go();
}
