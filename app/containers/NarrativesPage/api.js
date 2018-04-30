import Request from 'utils/request';

export function getNarratives(values) {
  const next = (values && values.next) || '';
  const previous = (values && values.previous) || '';
  const paginatedField = (values && values.paginatedField) || 'views';
  const limit = 20;
  const url = `http://localhost:9000/api/narratives?limit=${limit}&paginatedField=${paginatedField}&next=${next}&previous=${previous}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
