import fetch from 'dva/fetch';
import { notification } from 'antd';
import router from 'umi/router';

const codeMessages = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  const errText = codeMessages[res.status] || res.statusText;
  notification.error({
    message: `请求错误 ${res.status}: ${res.url}`,
    description: errText,
  });

  const err = new Error(errText);
  err.name = res.status;
  err.response = res;
  throw err;

}

/**
 * request a url, returning a promise
 * @param {string} url the url we want to request
 * @param {object} [options] the options we want to pass to fetch
 * @return {object} an object containinng either data or err
*/

export default function request(
  url,
  options
) {
  const defaultOptions = {
    credentials: 'include',
  };

  const newOptions = { ...defaultOptions, ...options };
  if (['POST', 'PUT', 'DELETE'].indexOf(newOptions.method) > -1) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions
      }
    }
  }

  let autoHeaders = {};

  newOptions.headers = { ...newOptions.headers, ...autoHeaders };

  return fetch(url, newOptions)
    .then(checkStatus)
    .then((res) => res.json())
    .catch(err => {
      const status = err.name;
      if (status === 404) {
        router.push('/404');
        return;
      }
    })
}