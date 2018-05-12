import Request from 'utils/request';

export function search(values) {
  const text = values.text ? values.text : '';
  const limit = 20;
  const url = `http://localhost:9000/api/narratives?limit=${limit}&search=${text}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
