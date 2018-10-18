import React from 'react';
import { connect } from 'dva';
import css from './index.less';

@connect(state => state.home)
export default class PageInfo extends React.PureComponent {
  render() {
    const { location: { pathname } } = this.props;
    const id = pathname.split('/')[2];
    return <div className="page">
      <div className="container">
        <iframe className={css.viewer} src={`/source/home/${id}`} frameBorder="0"></iframe>
      </div>
    </div>
  }
}