import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.status : styles.status_off}></span>
    <img className={styles.avatar} src={avatar} alt="" width="70" />
    <p className={styles.name}>{name}</p>
  </li>
);

//function changeColorStatus(isOnline) {
//document.status.backgroundColor = '00FF00' & 'FF0000';
//}
export default FriendListItem;
