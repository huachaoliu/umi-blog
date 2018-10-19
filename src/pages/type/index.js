import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import css from './index.less';

@connect(state => state.type)
export default class Types extends React.PureComponent {
  state = {
    cls: css.tag,
    active: -1,
  }
  _handlerRouteChange = (key) => {
    router.push(`/type/${key}`);
  }

  _onMouseOut = (index, e) => {
    e.stopPropagation();
    this.setState({
      active: index,
      cls: `${css.tag} ${css.out}`,
    }, () => {
      let t = setTimeout(() => {
        clearTimeout(t);
        this.setState({ cls: css.tag });
      }, 500);
    })
  }

  render() {
    const { list } = this.props;
    const { active, cls } = this.state;
    return <div className="page">
      <div className={css.type} ref={r => this.ref = r}>
        {
          list.map((tag, i) => {
            return <div
              key={i}
              className={ active === i ? cls : css.tag}
              onMouseLeave={this._onMouseOut.bind(this, i)}
              onClick={this._handlerRouteChange.bind(this, tag.key)}
              >
              <span>{tag.key}</span>
              <div className={css.mask} style={{ background: tag.color }}>{tag.key}</div>
            </div>
          })
        }
      </div>
    </div>
  }
}