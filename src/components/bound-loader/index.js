import css from './index.less';
export default (props) => {
  return <div className={css.bouncing_loader}>
    <div></div>
    <div></div>
    <div></div>
  </div>
}