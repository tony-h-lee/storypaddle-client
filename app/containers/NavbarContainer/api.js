import Request from 'utils/request';

export function search(values) {
  const text = values.input.value ? values.input.value : '';
  const limit = 10;
  const url = `http://localhost:9000/api/narratives?limit=${limit}&search=${text}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
