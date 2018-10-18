import React from 'react';
import dayjs from 'dayjs';
import router from 'umi/router';
import { FORMAT, tagLink } from '@/utils';
import Card from '@/components/card';
import Tag from '@/components/tag';
import HightText from '@/components/hight-text';
import { connect } from 'dva';
import css from './index.less';

@connect(state => state.home)
export default class Home extends React.PureComponent {
  _showMore = (id) => {
    console.log(id);
    router.push(`/home/${id}`);
  }
  render() {
    const { list } = this.props;
    return <div className="page">
      <div className="container">
        {
          list.map(data => {
            const { id, title, short, date, tags, more, rules } = data;
            return <Card key={id}
              header={title}
              className={css.card_box}
              >
              <div className={css.card_item}>
                <div className={css.info}>
                  <span className={css.time}>{dayjs(date).format(FORMAT)}</span>
                  <span>标签：</span>
                  {
                    tags.map((t, i) => {
                      return <Tag show={tagLink.indexOf(t) > -1} key={i}>{t}</Tag>;
                    })
                  }
                </div>
                <div className={css.card_content}>
                  <pre><HightText rules={rules} text={short} /></pre>
                  {
                    more && <div className={css.show_more} onClick={this._showMore.bind(this, id)}>查看更多</div>
                  }
                </div>
              </div>
            </Card>
          })
        }
      </div>
    </div>
  }
}