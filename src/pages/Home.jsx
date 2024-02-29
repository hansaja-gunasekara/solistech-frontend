import React from "react";
import EmployeeTable from "../components/EmployeeTable";

const sampleEmployees = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    address: "123 Main St",
    email: "john@example.com",
    number: "123-456-7890",
    birthofdate: "1990-01-01",
    department: "IT",
    creationDate: "2024-01-01",
  },
  {
    id: 2,
    firstname: "kavindu",
    lastname: "Doe",
    address: "123 Main St",
    email: "john@example.com",
    number: "123-456-7890",
    birthofdate: "1990-01-01",
    department: "IT",
    creationDate: "2024-01-01",
  },
  {
    id: 3,
    firstname: "kanishka",
    lastname: "Doe",
    address: "123 Main St",
    email: "john@example.com",
    number: "123-456-7890",
    birthofdate: "1990-01-01",
    department: "HR",
    creationDate: "2024-01-01",
  },
  {
    id: 4,
    firstname: "thennakoon",
    lastname: "Doe",
    address: "123 Main St",
    email: "john@example.com",
    number: "123-456-7890",
    birthofdate: "1990-01-01",
    department: "IT",
    creationDate: "2024-01-01",
  },
  {
    id: 5,
    firstname: "John",
    lastname: "Doe",
    address: "123 Main St",
    email: "john@example.com",
    number: "123-456-7890",
    birthofdate: "1990-01-01",
    department: "IT",
    creationDate: "2024-01-01",
  },
  {
    id: 6,
    firstname: "Hansaja",
    lastname: "Doe",
    address: "123 Main St",
    email: "john@example.com",
    number: "123-456-7890",
    birthofdate: "1990-01-01",
    department: "IT",
    creationDate: "2024-01-01",
  },
  // Add more sample data entries here
];

export default function Home() {
  return (
    <div>
      <br></br>
      <EmployeeTable employees={sampleEmployees} />
    </div>
  );
}
