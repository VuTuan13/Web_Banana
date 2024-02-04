// List component
import React from "react";
import classNames from "classnames/bind";
import styles from './List.module.scss'

const cx = classNames.bind(styles);

const List = ({ items }) => (
 
  <ul className={cx('menu')}>
    {items.map((item, index) => (
      <li key={index}>
        <h3>{item.title}</h3>
        <ul>
          {item.content.map((contentItem, contentIndex) => (
            <li key={contentIndex}><a>{contentItem}</a></li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default List;
