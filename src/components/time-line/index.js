import React from 'react';
import css from './index.less';

export default class TimeLine extends React.PureComponent {
  static defaultProps = {
    dataSource: []
  }

  state = {
    years: []
  }

  componentDidMount() {
    // 重新规划数据格式
    const { dataSource } = this.props;
    const years = [];
    dataSource.map(d => {
      years.push(d.date.split('.')[0]);
    });
    const data = [];
    [...new Set(years)].map(y => {
      data.push({
        year: y,
        children: [],
      });
    });
    dataSource.map(d => {
      data.map(item => {
        if (d.date.split('.')[0] === item.year) {
          item.children.push(d);
        }
      });
    });
    this.setState({ data });
  }

  render() {
    return <div className={css.timeline}>
      
    </div>
  }
}