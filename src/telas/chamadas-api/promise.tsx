import React from "react";

const Promisses: React.FC = () => {
  const condicao = true;

  const promessa = new Promise((resolve, reject) => {
    resolve("Deu certo!");
  });

  promessa
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro))
    .finally(() => console.log("Acabou!\n"));

  return (
    <div>
      <h1>Promisses</h1>
    </div>
  );
};

export default Promisses;
