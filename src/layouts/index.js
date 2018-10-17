import { PureComponent, Fragment } from 'react';
import withRouter from 'umi/withRouter';
import CanvasNest from 'canvas-nest.js';
import Header from './header';
import css from './index.less';

@withRouter
export default class Layout extends PureComponent {
  componentDidMount() {
    const config = {
      color: '55, 55, 55',
      count: 80,
      opacity: .7
    };
    // Using config rendering effect at 'element'.
    // const cn = new CanvasNest(document.body, config);

    //destory
    // cn.destory();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  
  render() {
    const { children, location, ...args } = this.props;
    // if (location.pathname === '/') {
    //   return children;
    // }
    // console.log(this.props);
    return <Fragment>
      <Header />
      <div className={css.content}>
        {children}
      </div>
    </Fragment>
  }
}