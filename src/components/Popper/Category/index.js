import classNames from 'classnames/bind';
import styles from './Category.module.scss'
import { useState } from 'react';

const cx = classNames.bind(styles);

const Category = ({ name, items }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <details>
      <summary onClick={toggleExpand} style={{ cursor: 'pointer' }}>{name}</summary>
      {isExpanded && (
        <ul>
          {items.map((item, index) => (
            <li key={index}><a>{item}</a></li>
          ))}
        </ul>
      )}
    </details>
  );
};

export default Category;
