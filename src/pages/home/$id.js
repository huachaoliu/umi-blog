import React from 'react';
import { connect } from 'dva';
import { yqUrl } from '@/utils';
import css from './index.less';

@connect(state => state.home)
export default class PageInfo extends React.PureComponent {
  render() {
    const { location: { pathname } } = this.props;
    const id = pathname.split('/')[2];
    // <iframe className={css.viewer} src={`${yqUrl}${id}`} frameBorder="0"></iframe>
    return <div className="page">
      <iframe className={css.viewer} src={`/source/home/${id}`} frameBorder="0"></iframe>
    </div>
  }
}