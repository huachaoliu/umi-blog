import React, { PureComponent } from 'react';
import classnames from 'classnames';
import css from './index.less';

export default class Card extends PureComponent {
  static defaultProps = {
    header: ''
  };

  state = {};

  render() {
    const { children,　header, className } = this.props;

    const headerEl = typeof header === 'string' ? <h2>{header}</h2> : header;

    return <div className={classnames(css.card, {
      [`${className}`]: !!className
    })}>
      {headerEl}
      {children}
    </div>
  }
}