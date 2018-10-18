import request from '../utils/request';
import datas from '../datas/data.json';
import logs from '../datas/log.json';
import tags from '../datas/tag.json';

export function getDataTags() {
  return [
    ...datas
  ];
}

export function getPageLogs() {
  return [...logs];
}

export function getPageType() {
  return [...tags];
}