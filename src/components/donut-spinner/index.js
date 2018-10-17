import css from './index.less';

export default (props) => {
  const color = props.color || '#7983ff';
  return <div style={{ '--color': color }} className={css.donut}></div>
}