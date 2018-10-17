import request from '../utils/request';
import jsons from '../datas/home.json';

export function getHomePageData() {
  return jsons;
}

export function getPageInfo(id) {
  return request('../docs/home/00001.md', {
    method: 'GET',
  });
}