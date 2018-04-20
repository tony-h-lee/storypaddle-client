import Request from 'utils/request';

export function getNarratives() {
  const url = 'http://localhost:9000/api/narratives';
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
