import fetch from 'isomorphic-fetch';

export default function _fetch(url, config) {
  url = `${_fetch.API_ROOT}${url}`;

  return fetch(url, config)
    .then(_status)
    .then(_json);
}

_fetch.API_ROOT = '';


function _status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText)
    error.response = response;
    throw error;
  }
}

function _json(response) {
  return response.json();
}
