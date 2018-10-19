import React from 'react';
import classnames from 'classnames';
import router from 'umi/router';
import Link from 'umi/link';

import styles from './index.css';

const str = 'HUACHAOLIU';
export default class Index extends React.PureComponent {
  state = {
    active: 0,
  }

  timer = null;

  componentDidMount() {
    const l = str.length;
    const n = Math.random() * l | 0;

    this.setState({ active: n });

    // this.timer = setInterval(this.loop, 500);
    router.push('/home');
  }

  loop = () => {
    const l = str.length;    
    const n = Math.random() * l | 0;
    this.setState({ active: n });
  }

  onMouseOver = (e) => {
    clearTimeout(this.timer);
    this.timer = null;
  }

  onMouseOut = (e) => {
    // this.timer = setInterval(this.loop, 500);
  }

  render() {
    const { active } = this.state;
    return (
      <div className={styles.page}>
        <div className={styles.title}>
          {
            str.split('').map((t, i) => <span
              key={i}
              className={classnames(styles.key, { [`${styles.enter}`]: i === active })}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              >{t}</span>)
          }
        </div>
      </div>
    );
  }
}
