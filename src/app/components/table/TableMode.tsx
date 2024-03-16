import { useMode } from "@/app/context/QuizModeCotext";
import { TableModeProps } from "@/app/interfaces/interfaces";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React from "react";

const TableMode: React.FC<TableModeProps> = ({ titles, values }) => {
  const { mode } = useMode();

  const StyledTableCell = styled(TableCell)(() => ({
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    color: mode ? "white" : "black",
  }));

  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: 650,
        maxWidth: 1000,
        margin: "auto",
        marginBottom: 10,
        bgcolor: mode ? "#1976d2" : "white",
      }}
    >
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ fontWeight: "bold" }}>
            {titles.map((name) => (
              <StyledTableCell sx={{ width: "100px" }} key={name}>
                {name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {values.map((val, index) => (
              <StyledTableCell key={index}>{val}</StyledTableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMode;
