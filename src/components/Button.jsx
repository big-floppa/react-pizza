import React from 'react';
import classNames from 'classnames';

export default function Button({ onClick, className, outline, add, goBack, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--add': add,
        'go-back-btn': goBack,
      })}>
      {children}
    </button>
  );
}
