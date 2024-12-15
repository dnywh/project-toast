import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant = "notice", children }) {
  const { dismissToast } = React.useContext(ToastContext)

  const IconToRender = ICONS_BY_VARIANT[variant]

  useEscapeKey(() => dismissToast(id))

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconToRender size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} — {' '}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismissToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        callback();
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback])
}


export default Toast;
