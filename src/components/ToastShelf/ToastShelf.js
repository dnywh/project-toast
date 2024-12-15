import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastStack }) {
  console.log(toastStack)
  return (
    <ol className={styles.wrapper}>
      {toastStack.map(item => {
        return (
          <li className={styles.toastWrapper}>
            <Toast variant="notice">{item}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
