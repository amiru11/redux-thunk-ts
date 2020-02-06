import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Form.scss';

const cx = classNames.bind(styles);

interface IFormProps {
  onSubmit: (username: string) => void;
}

function Form({ ...props }: IFormProps): JSX.Element {
  const [username, setUsername] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUsername(event?.target?.value);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    props.onSubmit(username);
  }

  return (
    <div className={cx('form-container')}>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleChange} value={username} />
        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default Form;
