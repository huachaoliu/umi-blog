import React from 'react';
import css from './index.less';

export default class Tracking extends React.PureComponent {
  componentDidMount() {
    let btn = document.querySelector(`.${css.tracking}`);
    btn.onmousedown = function (e) {
      const x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft;
      const y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop;
      console.log(x, y);
      btn.style.setProperty('--x', `${x}px`);
      btn.style.setProperty('--y', `${y}px`);
    }
  }
  
  render() {
    return <div className={css.tracking}>
      <span>hover me</span>
    </div>
  }
}