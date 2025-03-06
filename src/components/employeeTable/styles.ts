import styled from 'styled-components';

/* ===== Estilos Desktop ===== */
export const TableContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 20px auto 0 auto;
  background-color: #ffffff;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: #0500FF;
  color: #fff;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 0;
  border-radius: 8px 8px 0 0;
`;

export const HeaderItem = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 10px;

  &:first-child {
    flex: 0 0 80px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

export const TableCell = styled.div`
  flex: 1;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  padding-left: 10px;

  &:first-child {
    flex: 0 0 80px;
  }
`;

export const EmployeeImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
`;


/* ===== Estilos Mobile ===== */
export const MobileTableContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 20px auto 0 auto;
  background-color: #ffffff;
`;

export const MobileTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0500FF;
  padding: 10px;
  border-radius: 8px 8px 0 0;
`;

export const MobileHeaderLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
 
`;

export const MobileHeaderLeftName = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  
`;

export const MobileHeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right:18px;
`;

// Bolinha branca de 8px de diâmetro no cabeçalho mobile
export const WhiteDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
`;

// Container da linha do funcionário (versão mobile)
export const MobileRowContainer = styled.div`
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

// Componente que contém foto, nome e sinal de maior
export const MobileRowMain = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
`;

// Estilo da foto com distância de 16px da lateral esquerda
export const MobileEmployeeImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 16px;
`;

// Nome do funcionário com distância de 24px em relação à foto
export const MobileEmployeeName = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-left: 24px;
  flex-grow: 1;
  text-align: left;
`;

export const MobileToggleIcon = styled.img`
  width: 17px;
  height: 9px;
  margin-right: 23px;
`;

// Detalhes expandidos (linha para Cargo, Data de admissão e Telefone)
export const MobileExpandedDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espaçamento de 15px entre as linhas */
  padding-bottom: 31px;
`;

export const MobileDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  position: relative;
  /* Adiciona a linha tracejada abaixo do conteúdo */
  &::after {
    content: "";
    position: absolute;
    bottom: -1px; /* ajuste esse valor conforme necessário para posicionar a linha */
    left: 16px;   /* inicia a linha a partir do início do conteúdo (respectando o padding) */
    right: 39px;  /* termina a linha na borda direita do conteúdo */
    border-bottom: 1px dashed #DFDFDF;
  }
`;


export const MobileDetailLabel = styled.span`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #1C1C1C;
`;

export const MobileDetailValue = styled.span`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #1C1C1C;
  margin-right: 23px;
`;

