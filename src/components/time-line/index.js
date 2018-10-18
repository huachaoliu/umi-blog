import React from 'react';
import css from './index.less';

export default class TimeLine extends React.PureComponent {
  static defaultProps = {
    dataSource: []
  }

  state = {
    dataSource: [],
    years: [],
  }

  componentDidMount() {
    // 重新规划数据格式
    const { dataSource } = this.props;
    let years = [];
    dataSource.map(d => {
      years.push(d.date.split('.')[0]);
    });
    const data = [];
    years = new Set(years);
    [...years].map(y => {
      data.push({
        year: y,
        children: [],
      });
    });
    dataSource.map(d => {
      data.map(item => {
        if (d.date.split('.')[0] === item.year) {
          item.children.push(d);
        }
      });
    });
    this.setState({ dataSource: data, years: [...years] });
  }

  render() {
    const { dataSource, years } = this.state;
    // dataSource.map((data, i) => {
//             return <div key={i} className={css.info}>
//               {
//                 dataSource.map((data, i) => <div key={i}
//                   className={css.block}
//                   >
//                   <div className={css.block}></div>
//                   {
//                     data.children.map((c, i) => <div key={i} className={css.block}>
//                       <div className={css.item}>
//                         {
//                           c.items.map((t, i) => <div key={i}>{t}</div>)
//                         }
//                       </div>
//                     </div>)
//                   }
//                 </div>)
//               }
//             </div>
//           })
    return <div className={css.timeline}>
      <div className={css.left}>
        {
          years.map(y => <div key={y} className={css.year}>
            <div className={css.parent}>
              <span className={css.year_tag}>{y}</span>
              <span className={css.dashed}>------------------</span>
              <span className={css.circle}></span>
            </div>
            <div className={css.children}>
              {
                dataSource.map((data, i) => {
                  if (data.year === y) {
                    const n = data.children.length + 1;
                    return data.children.map((c, i) => <span
                      className={css.date}
                      style={{ height: 32 * n }}
                      key={i}>
                      {c.date}
                    </span>
                    )
                  }
                })
              }
            </div>
          </div>)
        }
      </div>
      <div className={css.line}></div>
      <div className={css.right}>
        {
          dataSource.map((data, i) => {
            return <div key={i} className={css.block}>
              {
                data.children.map((c, i) => {
                  console.log(c);
                  return <div key={i} className={css.item}>
                    {
                      c.items.map((t, i) => <span key={i}>{t}</span>)
                    }
                  </div>
                })
              }
            </div>
          })
        }
      </div>
    </div>
  }
}