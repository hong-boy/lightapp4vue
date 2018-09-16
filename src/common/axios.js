import axios from 'axios';


// 封装axios请求
function request(method, url, params, data) {
  return axios({
    method,
    baseURL: '/api',
    url,
    headers: { 'x-session-token': '' },
    params,
    data,
  });
}

// GET
export function getServerData(url, params) {
  return request('get', url, params);
}

// POST
export function postServerData(url, data) {
  return request('post', url, undefined, data);
}

// UPDATE
export function putServerData(url, params, data) {
  return request('put', url, params, data);
}

// DELETE
export function deleteServerData(url, params) {
  return request('delete', url, params);
}
