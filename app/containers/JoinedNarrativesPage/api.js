import Request from 'utils/request';

export function getJoinedNarratives(values) {
  const url = 'http://localhost:9000/api/users/me/joined/';
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
    .setBody({ id: values.narrative, add: false })
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}