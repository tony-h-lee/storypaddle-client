import Request from 'utils/request';
import { NEW } from './constants';

export function getNewNarratives(values) {
  const next = (values && values.next) || '';
  const limit = 20;
  const url = `http://localhost:9000/api/narratives?limit=${limit}pagination=${NEW}&next=${next}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
