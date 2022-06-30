import React, { useRef, FormEvent } from "react";

const Home: React.FC = () => {
  const formRef = useRef({
    nome: "",
    sobrenome: "",
    idade: "",
    count: 0,
  });

  const mostrarValores = (event: FormEvent) => {
    event.preventDefault();
    if (formRef.current) {
      formRef.current.count += 1;
      console.log("formRef", formRef.current);
    }
  };

  return (
    <div>
      <form onSubmit={mostrarValores}>
        <input
          type="text"
          name="nome"
          onChange={(event) => (formRef.current.nome = event.target.value)}
        />
        <input
          type="text"
          name="sobrenome"
          onChange={(event) => (formRef.current.sobrenome = event.target.value)}
        />
        <input
          type="number"
          name="idade"
          onChange={(event) => (formRef.current.idade = event.target.value)}
        />
        <button type="submit">Mostrar valores</button>
      </form>
      <Logger />
    </div>
  );
};

const Logger: React.FC = () => {
  return <div></div>;
};

export default Home;
