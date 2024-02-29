import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TablePagination,
  Grid,
} from "@mui/material";

const EmployeeTable = ({ employees }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchName, setSearchName] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstname.toLowerCase().includes(searchName.toLowerCase()) &&
      (searchDepartment === "" || employee.department === searchDepartment)
    );
  });

  const sortedEmployees = sortBy
    ? [...filteredEmployees].sort((a, b) => {
        if (sortBy === "creationDate") {
          return new Date(a.creationDate) - new Date(b.creationDate);
        }
        return 0;
      })
    : filteredEmployees;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8} md={10}>
        <FormControl fullWidth>
          <TextField
            label="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={4} md={2}>
        <FormControl fullWidth>
          <InputLabel>Filter by Department</InputLabel>
          <Select
            value={searchDepartment}
            onChange={(e) => setSearchDepartment(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            {/* Add more departments as needed */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Birth of Date</TableCell>
                <TableCell>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setSortBy("creationDate")}
                  >
                    Department
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedEmployees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.firstname}</TableCell>
                    <TableCell>{employee.lastname}</TableCell>
                    <TableCell>{employee.address}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.number}</TableCell>
                    <TableCell>{employee.birthofdate}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedEmployees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
};

export default EmployeeTable;
