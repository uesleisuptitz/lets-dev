import React, { useRef, FormEvent } from "react";

const Example: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Nome: " + inputRef?.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome</label>
      <input type="text" name="nome" ref={inputRef} />
    </form>
  );
};

export default Example;
