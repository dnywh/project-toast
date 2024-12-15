import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              id={id}
              variant={variant}
              toasts={toasts}
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
