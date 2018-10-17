import css from './index.less';

export function highlightText(source, value, color = '#3490fc') {
  let match, start, len = value.length;
  let __html = source;
  const lowerSource = source.toLowerCase();
  const lowerValue = value.toLowerCase();
  start = lowerSource.indexOf(lowerValue);
  if (start > -1) {
    match = source.slice(start, start + len);
    const v = match || value;
    const regTxt = v.replace(/\./, '\\.')
      .replace(/\^/, '\\^')
      .replace(/\(\)/, '\\(\\)')
      .replace(/\$/, '\\$');
    try {
      const reg = new RegExp(regTxt);
      const replace = `<strong style="color:${color};">${v}</strong>`;
      __html = source.replace(reg, replace);
    } catch (err) {
      const replace = `<strong style="color:${color}">${value}</strong>`;
      const prefix = source.split(regTxt)[0];
      const sufix = source.slice(start + regTxt.length);
      __html = prefix + replace + sufix;
    }
  }
  return __html;
}

export default props => {
  const { rules, text } = props;
  let newText = text;
  rules.map(r => {
    newText = highlightText(newText, r.reg, r.color);
  });
  return <span dangerouslySetInnerHTML={{ __html: newText }}></span>
}