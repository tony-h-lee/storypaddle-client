import Request from 'utils/request';

export function getScene(values) {
  const url = `http://localhost:9000/api/scenes/${values.id}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}

export function getComments(values) {
  const order = values.order;
  const url = `http://localhost:9000/api/comments?scene=${values.id}&order=${order}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}

export function getMoreComments(values) {
  const next = (values && values.next) || '';
  const previous = (values && values.previous) || '';
  const order = values.order;
  const limit = 10;
  const url = `http://localhost:9000/api/comments?scene=${values.id}&next=${next}&previous=${previous}&limit=${limit}&order=${order}`;
  return new Request()
    .setUrl(url)
    .setGet()
    .addHeader({ 'Content-Type': 'application/json' })
    .go();
}


export function postComment(values, token) {
  const url = 'http://localhost:9000/api/comments';
  return new Request()
    .setUrl(url)
    .setPost()
    .addHeader({ 'Content-Type': 'application/json' })
    .setToken(token)
    .setBody(values)
    .go();
}
