import Request from 'utils/request';

export function getJoinedNarratives(values) {
  const next = (values && values.next) || '';
  const previous = (values && values.previous) || '';
  const url = `http://localhost:9000/api/narratives?user=${values.author}&next=${next}&previous=${previous}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .setToken(values.token)
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}

export function leaveNarrative(values) {
  const url = `http://localhost:9000/api/narratives/roles/${values.narrative}`;
  return new Request()
    .setUrl(url)
    .setPut()
    .setToken(values.token)
    .setBody({ id: values.narrative })
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
