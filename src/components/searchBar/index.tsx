import React from 'react';
import { 
  SearchBarContainer, 
  Title, 
  SearchInputContainer, 
  StyledInput, 
  SearchIcon 
} from './styles';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <SearchBarContainer>
      <Title>Funcionários</Title>
      <SearchInputContainer>
        <StyledInput
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Pesquisar"
        />
        <SearchIcon src="/assets/icons/search.png" alt="Ícone de pesquisa" />
      </SearchInputContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
