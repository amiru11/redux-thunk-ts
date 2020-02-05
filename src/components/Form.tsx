import React, { useState } from 'react';

interface IFormProps {
  onSubmit: (username: string) => void;
}

function Form({ ...props }: IFormProps): JSX.Element {
  const [username, setUsername] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUsername(event?.target?.value);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    props.onSubmit(username);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' onChange={handleChange} value={username} />
      <button type='submit'>Click</button>
    </form>
  );
}

export default Form;
