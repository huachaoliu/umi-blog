import React from 'react';
import css from './index.less';

export default class UnknowHeightTransform extends React.PureComponent {
  componentDidMount() {
    var el = document.querySelector('.' + css.el)
    var height = el.scrollHeight
    el.style.setProperty('--max-height', height + 'px')
  }

  render() {
    return <div className={css.trigger}>
      hover me to see a height transition
      <div className={css.el}>content</div>
    </div>
  }
}