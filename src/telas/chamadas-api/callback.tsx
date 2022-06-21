import React from "react";

const Callback: React.FC = () => {
  // Uma função que recebe um parâmetro e faz algo com ele
  // Ela também recebe um callback que é chamado ao final da função
  function printaNome(nome: string, callback: () => void) {
    console.log(nome);
    callback();
  }

  // Chamamos a função printaNome() passando um nome e o nosso callback
  // Nosso callback basicamente printa o sobrenome
  printaNome("João", () => {
    console.log("Silva");
  });

  // Obs.:
  // Podemos ter vários níveis de callback
  // Neste exemplo temos 1 nível

  return (
    <div>
      <h1>Callback</h1>
    </div>
  );
};

export default Callback;
