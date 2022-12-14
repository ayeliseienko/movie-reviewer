import React from 'react';

interface Props {
  input: {
    id: string;
    type: string;
    placeholder?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
  };
  label: { isVisible: boolean; title: string };
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ input, label, className = '' }, ref): JSX.Element => {
    return (
      <div className={`flex flex-col justify-start items-start ${className}`}>
        {label.isVisible && (
          <label
            htmlFor={input.id}
            className={`block mb-2 text-sm dark:text-lightGrey`}
          >
            {label.title}
          </label>
        )}
        <input
          {...input}
          ref={ref}
          className={`w-full p-2 rounded-sm text-slate-700`}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
