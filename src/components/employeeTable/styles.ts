import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  border-radius: 8px 8px 0 0;
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
