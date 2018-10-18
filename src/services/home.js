import request from '../utils/request';
import jsons from '../datas/home.json';

export function getHomePageData() {
  return jsons;
}

export function getPageInfo(id) {
  return {
    code: 0,
    data: __dirname + `../source/${id}.html`,
    error: {
      msg: ''
    }
  }
}