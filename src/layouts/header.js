import { PureComponent } from 'react';
import Navigation from './navigation';
import css from './index.less';

const str = 'HUACHAOLIU';
export default class Header extends PureComponent {
  render() {
    return <div className={css.header}>
      <div className={css.logo}>
        <span className={css.spec}>{str[0]}</span>
        <span>{str.slice(1)}</span>
      </div>
      <Navigation />
    </div>
  }
}