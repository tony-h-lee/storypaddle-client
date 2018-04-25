import Request from 'utils/request';
import { NEW } from './constants';

export function getNewNarratives(values) {
  const next = (values && values.next) || '';
  const url = `http://localhost:9000/api/narratives?pagination=${NEW}&next=${next}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}
