import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  TableContainer, 
  TableHeader, 
  HeaderItem, 
  TableRow, 
  TableCell, 
  EmployeeImage 
} from './styles';

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployeeTableProps {
  search: string;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ search }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios.get<Employee[]>('http://localhost:3000/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  // Função para formatar a data no padrão brasileiro (dd/mm/aaaa)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  // Função simples para formatar o telefone
  const formatPhone = (phone: string) => {
    if (phone.length === 13 && phone.startsWith('55')) {
      const area = phone.substring(2, 4);
      const firstPart = phone.substring(4, 9);
      const secondPart = phone.substring(9);
      return `(${area}) ${firstPart}-${secondPart}`;
    }
    return phone;
  };

  // Filtrar os funcionários baseado no termo de busca (nome, cargo, data e telefone)
  const filteredEmployees = employees.filter(employee => {
    const searchTerm = search.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.job.toLowerCase().includes(searchTerm) ||
      formatDate(employee.admission_date).toLowerCase().includes(searchTerm) ||
      employee.phone.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <TableContainer>
      <TableHeader>
        <HeaderItem>FOTO</HeaderItem>
        <HeaderItem>NOME</HeaderItem>
        <HeaderItem>CARGO</HeaderItem>
        <HeaderItem>DATA DE ADMISSÃO</HeaderItem>
        <HeaderItem>TELEFONE</HeaderItem>
      </TableHeader>
      {filteredEmployees.map(employee => (
        <TableRow key={employee.id}>
          <TableCell>
            <EmployeeImage src={employee.image} alt={employee.name} />
          </TableCell>
          <TableCell>{employee.name}</TableCell>
          <TableCell>{employee.job}</TableCell>
          <TableCell>{formatDate(employee.admission_date)}</TableCell>
          <TableCell>{formatPhone(employee.phone)}</TableCell>
        </TableRow>
      ))}
    </TableContainer>
  );
};

export default EmployeeTable;
