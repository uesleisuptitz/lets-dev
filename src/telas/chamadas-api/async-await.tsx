import React from "react";

const AsyncAwait: React.FC = () => {
  // Condição para nossa promise
  const motoristaAceitou = true;

  // Início
  console.log("Procurando motorista...");

  // Nossa promise (função para receber parâmetros)
  const promessa = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (motoristaAceitou) {
          resolve("Deu certo! Seu motorista está vindo.");
        } else {
          reject("Deu errado! Procure outro motorista!");
        }
      }, 3000);
    });
  };

  // Sem async / await
  const resposta = promessa();
  alert(resposta);

  // Com async / await
  // async function start() {
  //   const resposta = await promessa();
  //   alert(resposta);
  // }
  // start();

  return (
    <div>
      <h1>AsyncAwait</h1>
    </div>
  );
};

export default AsyncAwait;
