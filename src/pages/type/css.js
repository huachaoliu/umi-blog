import React1 from 'react';
import css from './index.less';

export default class Css extends React.PureComponent {

  render() {
    return <div className={css.page}>
      <div className={css.left}></div>
      <div className={css.right}></div>
    </div>
  }
}