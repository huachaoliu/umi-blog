import React from 'react';
import router from 'umi/router';
import css from './index.less';

export default class Tag extends React.PureComponent {
  componentDidMount() {
    if (this.props.show) {
      this.r.style.setProperty('--c', '#ff3912');
    }
  }

  _handlerToRoute = () => {
    if (this.props.to) {
      const route = to.charAt(0) === '/' ? to : `/${to}`;
      router.push(route);
    }
  }

  render() {
    const { children } = this.props;
    return <div
      ref={r => this.r = r}
      className={css.tag}
      onClick={this._handlerToRoute}
      >
      {children}
    </div>
  }
}