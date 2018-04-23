import Request from 'utils/request';

export function getNarratives(values) {
  const next = (values && values.next) || '';
  const pagination = (values && values.pagination) || '';
  const url = `http://localhost:9000/api/narratives?pagination=${pagination}&next=${next}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
