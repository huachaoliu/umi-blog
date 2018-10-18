import { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
// import CanvasNest from 'canvas-nest.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from './header';
import UserInfo from './user-info';
import css from './index.less';

@withRouter
@connect(state => state.global)
export default class Layout extends PureComponent {
  state = {
    cls: css.userInfo,
  }
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
    const { dispatch, children, location, showUserInfo } = this.props;

    if (location.pathname.indexOf('/source') > -1) {
      return <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          {children}
        </CSSTransition>
      </TransitionGroup>;
    }
    return <Fragment>
      <Header dispatch={dispatch} />
      <div className={css.content}>
        {children}
      </div>

      {showUserInfo && <UserInfo {...this.props} />}
    </Fragment>
  }
}