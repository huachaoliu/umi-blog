import { Table } from 'antd';
import router from 'umi/router';
import Tag from '@/components/tag';
import css from './index.less';

const dataSource = [{
  Chrome: 57,
  Opera: 44,
  Firefox: 52,
  IE: '11*',
  Edge: 16,
  Safari: 10.1
}];

const columns = [{
  title: 'Chrome',
  dataIndex: 'Chrome',
  key: 'Chrome',
}, {
  title: 'Opera',
  dataIndex: 'Opera',
  key: 'Opera',
}, {
  title: 'Firefox',
  dataIndex: 'Firefox',
  key: 'Firefox',
}, {
  title: 'IE',
  dataIndex: 'IE',
  key: 'IE',
}, {
  title: 'Edge',
  dataIndex: 'Edge',
  key: 'Edge',
}, {
  title: 'Safari',
  dataIndex: 'Safari',
  key: 'Safari',
}];

const dataSource1 = [{
  'iOS Safari': 10.3,
  'Opear Mobile': 'No',
  'Opear Mini': 'No',
  Android: '62',
  'Android Chrome': 62,
  'Android Firefox': 57
}];

const columns1 = [{
  title: 'iOS Safari',
  dataIndex: 'iOS Safari',
  key: 'iOS Safari',
}, {
  title: 'Opear Mobile',
  dataIndex: 'Opear Mobile',
  key: 'Opear Mobile',
}, {
  title: 'Opear Mini',
  dataIndex: 'Opear Mini',
  key: 'Opear Mini',
}, {
  title: 'Android',
  dataIndex: 'Android',
  key: 'Android',
}, {
  title: 'Android Chrome',
  dataIndex: 'Android Chrome',
  key: 'Android Chrome',
}, {
  title: 'Android Firefox',
  dataIndex: 'Android Firefox',
  key: 'Android Firefox',
}];

export default props => {
  return <div className={css.page}>
    <h2>css布局之grid布局</h2>
    <div className={css.info}>
      <span>创建时间：2018-10-17 23:11:11</span>
      <span>标签：<Tag>css</Tag></span>
    </div>

    <div className={css.content}>
      <p>CSS Grid(网格)布局（又称为"Grid网络")，是一个二维的基于网络的布局系统，他的目标是完全改变我们基于网络的用户界面的布局方式．css一直用来布局网页，但一直以都存在一些问题．从最初的table,到floag,在到position和inline-block，这些方法本质上都只是hack而已，遗漏了一些功能（如垂直居中）．
flexbox的出现很大程度上改善了我们的布局方式，但它的目标是为了解决更简单的一维布局，而不是复杂的二维布局（实际上flexbox和grid能结合工作，而且配合的非常好）,grid是第一个专门为解决布局问题而创建的css模块．</p>
      <p>推荐书籍：（摘抄 为CSS网格布局做好准备(rachel andrew), flexbox完整指南</p>

      <h3>基本使用和浏览器支持</h3>
      <p>使用display: grid属性定义一个容器．使用grid-template-columns 和 grid-template-rows设置行和列的大小.通过grid-column和grid-row设置子元素在网格中的位置.
截至2017年３月，许多浏览器都提供了对css grid的原生支持．</p>

      <h3>pc浏览器</h3>
      <Table rowKey="Chrome" dataSource={dataSource} columns={columns} pagination={false} />
      <h3>移动浏览器</h3>
      <Table rowKey="Android Firefox" dataSource={dataSource1} columns={columns1} pagination={false} />

      <p>除了微软之外，浏览器厂商似乎还没有对 Grid(网格) 搞自己的一套实现（比如加前缀），直到规范完全成熟。这是一件好事，因为这意味着我们不必担心学习多个语法。
在生产中使用 Grid 只是时间问题。 但现在是学习的时候了。</p>
      <p>原文链接：</p>
      <p><a href="http://www.css88.com/archives/8510/comment-page-1" target="_blank">http://www.css88.com/archives/8510/comment-page-1</a></p>

      <h3>例子:详情见分类页面</h3>
      <div className={css.example}>
        {
          ['web', 'html', 'js', 'css', 'node', 'api', '其他'].map((tag, i) => {
            return <div
              key={i}
              className={css.tag}
              >
              <span>{tag}</span>
            </div>
          })
        }
      </div>
    </div>
  </div>
}