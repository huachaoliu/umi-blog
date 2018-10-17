import React from 'react';
import { connect } from 'dva';
import css from './index.less';

@connect(state => state.home)
export default class PageInfo extends React.PureComponent {
  render() {
    console.log(this.props);
    return <div className="page">
      <div className="container">
        <h2>细数javascript中的几种数据模式</h2>
      </div>
    </div>
  }
}