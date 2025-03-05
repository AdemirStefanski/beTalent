import React, { useState } from 'react';
import SearchBar from '../searchBar/index';
import EmployeeTable from '../employeeTable/index';

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <EmployeeTable search={search} />
    </>
  );
};

export default Dashboard;
