import Request from 'utils/request';

export function getScene(values) {
  const url = `http://localhost:9000/api/scenes/${values.id}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
