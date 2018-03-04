import 'whatwg-fetch';
import { browserHistory } from 'react-router-dom';

const GET = 'GET';
const PUT = 'PUT';
const POST = 'POST';
const UPDATE = 'UPDATE';
const DELETE = ' DELETE';

export default class Request {

  constructor(url, body = {}) {
    this.url = url;
    this.body = body;
    this.body.method = GET;
    this.headers = new Headers();
    this.token = null;
    this.redirect = false;
  }

  setToken(token) {
    this.headers.set('authorization', `Bearer ${token}`);
    return this;
  }
  removeToken() {
    this.headers.delete('authorization');
    return this;
  }
  setUrl(url) {
    this.url = url;
    return this;
  }
  setBody(body) {
    this.body = JSON.stringify(body);
    return this;
  }
  addHeader(header) {
    this.headers.set(header);
    return this;
  }
  setRedirect(url) {
    this.redirect = url;
    return this;
  }

  // Methods
  get() {
    this.body.method = GET;
    return this;
  }
  put() {
    this.body.method = PUT;
    return this;
  }
  post() {
    this.body.method = POST;
    return this;
  }
  update() {
    this.body.method = UPDATE;
    return this;
  }
  delete() {
    this.body.method = DELETE;
    return this;
  }

  go = () => fetch(this.url, this.body)
    .then(this.checkStatus)
    .then(this.parseJSON);

  checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      if (this.redirect) {
        browserHistory.push(this.redirect);
      }
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  parseJson = (response) => {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.json();
  }

}
