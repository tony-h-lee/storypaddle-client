import Request from 'utils/request';

export function getMyNarratives(values) {
  const next = (values && values.next) || '';
  const previous = (values && values.previous) || '';
  const limit = 10;
  const url = `http://localhost:9000/api/narratives?limit=${limit}&author=${values.author}&next=${next}&previous=${previous}`;
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
