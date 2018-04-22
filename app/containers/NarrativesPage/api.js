import Request from 'utils/request';

export function getNarratives(values) {
  const next = (values && values.next) || '';
  const url = `http://localhost:9000/api/narratives?next=${next}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
