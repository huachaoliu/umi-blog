import React from 'react';
import { connect } from 'dva';
import TimeLine from '@/components/time-line';
import css from './index.less';

@connect(state => state.logs)
export default class Logs extends React.PureComponent {
  render() {
    const { list } = this.props;
    return <div className="page">
      <div className="container">
        <TimeLine dataSource={list} />
      </div>
    </div>
  }
}
