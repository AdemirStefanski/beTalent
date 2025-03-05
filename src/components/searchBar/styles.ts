import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 32px auto; /* Margem superior e inferior de 32px e centralizado horizontalmente */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;

export const Title = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #1C1C1C;
  margin: 0;
`;

export const SearchInputContainer = styled.div`
  width: 287px;
  height: 48px;
  background-color: #ffffff;
  border: 1px solid #DFDFDF;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  border: none;
  outline: none;
  background: transparent; /* Deixa o fundo transparente para mostrar o fundo branco do container */
  border-radius: inherit;  /* Herda os 8px do container */
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #1C1C1C;

  &::placeholder {
    color: #9E9E9E;
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
`;
