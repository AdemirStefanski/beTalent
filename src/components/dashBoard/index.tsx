import React, { useState } from 'react';
import SearchBar from '../searchBar/index';
import EmployeeTable from '../employeeTable/index';
import { DashboardContainer } from './styles';

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <DashboardContainer>
      <SearchBar search={search} setSearch={setSearch} />
      <EmployeeTable search={search} />
    </DashboardContainer>
  );
};

export default Dashboard;
