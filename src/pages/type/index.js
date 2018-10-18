import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import css from './index.less';

@connect(state => state.type)
export default class Types extends React.PureComponent {
  _handlerRouteChange = (key) => {
    router.push(`/type/${key}`);
  }
  render() {
    const { list } = this.props;
    console.log(list);
    return <div className="page">
      <div className={css.type}>
        {
          list.map((tag, i) => {
            return <div key={i} className={css.tag} onClick={this._handlerRouteChange.bind(this, tag.key)}>
              <span>{tag.key}</span>
              <div className={css.mask} style={{ background: tag.color }}>{tag.key}</div>
            </div>
          })
        }
      </div>
    </div>
  }
}