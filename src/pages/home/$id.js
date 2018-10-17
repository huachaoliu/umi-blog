import React from 'react';
import { connect } from 'dva';
import css from './index.less';

@connect(state => state.home)
export default class PageInfo extends React.PureComponent {
  componentDidMount() {
    const { dispatch, location: { pathname }} = this.props;
    const id = pathname.split('/')[2];
    // dispatch({ type: 'home/getPageInfo', payload: id });
    // console.log(`../../assets/docs/home/${id}.md`);
  }

  render() {
    const { dispatch, location: { pathname }} = this.props;
    const id = pathname.split('/')[2];
    return <div className="page">
      <div className="container">
        <iframe src={`../../assets/docs/home/${id}.md`} frameBorder="0"></iframe>
      </div>
    </div>
  }
}