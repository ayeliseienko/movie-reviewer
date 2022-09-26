import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({
  children,
  className = '',
  type = 'button',
  onClick,
}: Props): JSX.Element {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
