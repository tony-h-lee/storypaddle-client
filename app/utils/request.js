import 'whatwg-fetch';

const GET = 'GET';
const PUT = 'PUT';
const POST = 'POST';
const DELETE = ' DELETE';

export default class Request {

  constructor(url, body = {}) {
    this.url = url;
    this.body = body;
    this.method = GET;
    this.headers = {};
    this.token = null;
  }

  setToken(token) {
    this.headers = Object.assign(this.headers, { Authorization: `Bearer ${token}` });
    return this;
  }
  removeToken() {
    this.headers.authorization = null;
    return this;
  }
  setUrl(url) {
    this.url = url;
    return this;
  }
  setBody(data) {
    this.body = JSON.stringify(data);
    return this;
  }
  addHeader(header) {
    this.headers = Object.assign(this.headers, header);
    return this;
  }
  addBasicCredentials(data) {
    this.headers = Object.assign(this.headers,
      { Authorization: `Basic ${Buffer.from(`${data.email}:${data.password}`).toString('base64')}` });
    return this;
  }

  // Methods
  setGet() {
    this.method = GET;
    return this;
  }
  setPut() {
    this.method = PUT;
    return this;
  }
  setPost() {
    this.method = POST;
    return this;
  }
  setDelete() {
    this.method = DELETE;
    return this;
  }

  go = () => fetch(this.url, {
    method: this.method,
    headers: this.headers,
    body: this.body,
  })
    .then(this.checkAndParse);

  checkAndParse = (response) => {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response.json());
    }

    const error = new Error(response.statusText);
    error.response = response;
    error.message = response.message;
    return Promise.reject(response.status);
  };

}
