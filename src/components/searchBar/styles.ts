import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 32px auto; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  
  /* Responsividade para 470px */
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin: 20px 20px; 
    height: auto; 
  }
`;

export const Title = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #1C1C1C;
  margin: 0;
  @media (max-width: 470px) {
    width: 100%;
    text-align: left;
  }
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

  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: inherit;
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
