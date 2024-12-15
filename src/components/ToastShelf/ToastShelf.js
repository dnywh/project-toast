import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastStack, setToastStack }) {
  return (
    <ol className={styles.wrapper}>
      {toastStack.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              id={id}
              variant={variant}
              toastStack={toastStack}
              setToastStack={setToastStack}
            >
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
