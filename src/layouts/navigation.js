import * as React from 'react';
import classnames from 'classnames';
import router from 'umi/router';
import css from './index.less';

const navs = [{
  name: '首页',
  path: '/home'
}, {
  name: '日志',
  path: '/log'
}, {
  name: '分类',
  path: '/type'
}, {
  name: '关于',
  path: '/about'
}];
export default class Navigation extends React.PureComponent {
  state = {
    active: navs[0].path,
  }

  componentDidMount() {
    const { active } = this.state;
    const { pathname } = window.location;
    if (active !== pathname) {
      this.setState({ active: pathname });
    }
  }

  _handlerToRoute = (path) => {
    let flag = false;
    if (path !== '/about') {
      this.setState({ active: path });
      router.push(path);
    } else {
      flag = true;
    }
    this.props.dispatch({ type: 'global/showUserInfo', payload: flag });
  }

  render() {
    const { active } = this.state;
    return <div className={css.navigation}>
      {
        navs.map(nav => <div key={nav.path} className={classnames(css.btn, {
          [`${css.active}`]: nav.path === active
        })}
          onClick={this._handlerToRoute.bind(this, nav.path)}
          >
          {nav.name}
        </div>)
      }
    </div>
  }
}