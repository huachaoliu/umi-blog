import React from 'react';
import router from 'umi/router';
import classnames from 'classnames';
import { userName, address } from '@/utils';
import { Icon } from 'antd';
import css from './index.less';

export default class UserInfo extends React.PureComponent {
  state = {
    cls: css.userInfo
  }

  _handlerHideInfoBar = () => {
    const { dispatch } = this.props;
    this.setState({
      cls: `${css.userInfo} ${css.hide}`
    }, () => {
      setTimeout(() => {
        this.setState({ cls: css.userInfo });
        dispatch({ type: 'global/showUserInfo', payload: false });
      }, 500);
    })
  }

  _handlerRouteChange = (key) => {
    if (key !== 'tag') {
      router.push(`/${key}`);
    }
  }

  render() {
    const { cls } = this.state;
    const { wrapperClass, tags } = this.props;

    return <div className={cls}>
      <div className={css.top}>
        <div className={css.avatar}>
          <img src="/head.jpg" alt="头像" />
        </div>
        <p>{userName}</p>

        <div className={css.location}>
          所在地: {address}
        </div>

        <div className={css.job}>前端工程师</div>

        <div className={css.tags}>
          {
            tags.map(tag => {
              return <div key={tag.key} className={css.tag_item} onClick={this._handlerRouteChange.bind(this, tag.key)}>
                <span className={css.tag_name}>{tag.name}</span>
                <span>{tag.value}</span>
              </div>
            })
          }
        </div>

        <div className={css.qrcode}>
          <h3>二维码</h3>
          <img src="/qrcode.jpg" alt="二维码"/>
        </div>
      </div>
      <div className={css.backoff} onClick={this._handlerHideInfoBar}>
        <Icon type="right" />
      </div>
    </div>
  }
}