import Request from 'utils/request';
import { TRENDING } from './constants';

export function getTrendingNarratives(values) {
  const next = (values && values.next) || '';
  const limit = 20;
  const url = `http://localhost:9000/api/narratives?limit=${limit}&pagination=${TRENDING}&next=${next}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
