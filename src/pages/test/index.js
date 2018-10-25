import css from './index.less';

export default props => <div className="page">
  <div className={css.container}>
    <div className={css.header}>HEADER</div>
    <div className={css.menu}>MENU</div>
    <div className={css.content}>CONTENT</div>
    <div className={css.footer}>FOOTER</div>
  </div>
</div>