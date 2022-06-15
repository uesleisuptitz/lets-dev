import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  /* Definir o itens em coluna */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Limita o conteúdo para caber nos notebooks */
  max-width: 1200px;

  /* Mudar o espaçamento interno dos elementos de padding: 90px para: */
  padding: 50px 90px 115px 90px;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const Instrucao = styled.p`
  text-align: center;

  //Mudar o estilo de: margin: 20px 0 60px 0 para:
  margin: 20px 0 0 0;
`;

export const Divisor = styled.hr`
  background: #e5e5e5;
  height: 1px;
  width: 100%;
  margin: 100px 0 35px 0;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  //Estiliza o textarea dentro do form mesmo
  textarea {
    min-height: 100px;
    max-height: 200px;
    min-width: 50%;
    max-width: 100%;
  }
`;

export const Aviso = styled.p`
  font-weight: 500;
  margin-bottom: 100px;

  //Estiliza o strong dentro do p mesmo
  strong {
    font-weight: 600;
    color: #bd041a;
  }
`;
