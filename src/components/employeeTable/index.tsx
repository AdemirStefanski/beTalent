import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  TableContainer, 
  TableHeader, 
  HeaderItem, 
  TableRow, 
  TableCell, 
  EmployeeImage,
  // Estilos mobile importados abaixo;
  MobileTableContainer,
  MobileTableHeader,
  MobileHeaderLeft,
  MobileHeaderRight,
  WhiteDot,
  MobileRowContainer,
  MobileRowMain,
  MobileEmployeeImage,
  MobileEmployeeName,
  MobileToggleIcon,
  MobileExpandedDetails,
  MobileDetailRow,
  MobileDetailLabel,
  MobileDetailValue,
  MobileHeaderLeftName,
  
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

// Funções de formatação da data;
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

const formatPhone = (phone: string) => {
  if (phone.length === 13 && phone.startsWith('55')) {
    const country = phone.substring(0, 2);
    const area = phone.substring(2, 4);
    const firstPart = phone.substring(4, 9);
    const secondPart = phone.substring(9);
    return `+${country} (${area}) ${firstPart}-${secondPart}`;
  }
  return phone;
};

// Componente para cada funcionário na versão mobile;
const MobileEmployeeRow: React.FC<{ employee: Employee }> = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <MobileRowContainer>
      <MobileRowMain onClick={toggleExpanded}>
        <MobileEmployeeImage src={employee.image} alt={employee.name} />
        <MobileEmployeeName>{employee.name}</MobileEmployeeName>
        <MobileToggleIcon
          src={ expanded ? '/assets/icons/arrow_up.png' : '/assets/icons/arrow_down.png' }
          alt={ expanded ? 'Recolher' : 'Expandir' }
        />
      </MobileRowMain>
      {expanded && (
        <MobileExpandedDetails>
          <MobileDetailRow>
            <MobileDetailLabel>Cargo</MobileDetailLabel>
            <MobileDetailValue>{employee.job}</MobileDetailValue>
          </MobileDetailRow>
          <MobileDetailRow>
            <MobileDetailLabel>Data de admissão</MobileDetailLabel>
            <MobileDetailValue>{formatDate(employee.admission_date)}</MobileDetailValue>
          </MobileDetailRow>
          <MobileDetailRow>
            <MobileDetailLabel>Telefone</MobileDetailLabel>
            <MobileDetailValue>{formatPhone(employee.phone)}</MobileDetailValue>
          </MobileDetailRow>
        </MobileExpandedDetails>
      )}
    </MobileRowContainer>
  );
};

const EmployeeTable: React.FC<EmployeeTableProps> = ({ search }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    axios.get<Employee[]>('http://localhost:3000/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredEmployees = employees.filter(employee => {
    const searchTerm = search.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.job.toLowerCase().includes(searchTerm) ||
      formatDate(employee.admission_date).toLowerCase().includes(searchTerm) ||
      employee.phone.toLowerCase().includes(searchTerm)
    );
  });

  // Versão mobile (limitador de 550px);
  if (windowWidth < 550) {
    return (
      <MobileTableContainer>
        <MobileTableHeader>
          <MobileHeaderLeft>
            <MobileHeaderLeftName>
              FOTO
            </MobileHeaderLeftName>
            <MobileHeaderLeftName>
              NOME
            </MobileHeaderLeftName>
            </MobileHeaderLeft>
          <MobileHeaderRight>
            <WhiteDot />
          </MobileHeaderRight>
        </MobileTableHeader>
        {filteredEmployees.map(employee => (
          <MobileEmployeeRow key={employee.id} employee={employee} />
        ))}
      </MobileTableContainer>
    );
  }

  // Versão desktop;
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
