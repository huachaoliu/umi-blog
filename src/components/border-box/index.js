import css from './index.less';
import classnames from 'classnames';
export default props => <div>
  <div className={css.box}>border-box</div>
  <div className={classnames(css.box, css.content_box)}>content-box</div>
</div>