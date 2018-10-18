import request from '../utils/request';
import datas from '../datas/data.json';
import logs from '../datas/log.json';

export function getDataTags() {
  return [
    ...datas
  ];
}

export function getPageLogs() {
  return [...logs];
}