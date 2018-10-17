import css from './index.less';

export default props => <div>
  <input type="checkbox" id="toggle" className={css.offscreen} />
  <label htmlFor="toggle" className={css.switch}></label>
</div>