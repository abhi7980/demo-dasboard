import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Image = styled("img")({
  borderRadius: "50%",
  width: 40,
  height: 40,
  marginRight: 8,
});

function createData(customerImage, customerName, orderNo, amount, status) {
  return { customerImage, customerName, orderNo, amount, status };
}

const rows = [
  createData(
    "https://randomuser.me/api/portraits/men/1.jpg",
    "John Doe",
    "12345",
    250,
    "Cancelled"
  ),
  createData(
    "https://randomuser.me/api/portraits/men/1.jpg",
    "Jane Smith",
    "67890",
    300,
    "Pending"
  ),
  createData(
    "https://randomuser.me/api/portraits/men/1.jpg",
    "Emily Johnson",
    "54321",
    150,
    "Delivered"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer sx={{ paddingTop: "15px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customers</TableCell>
            <TableCell align="right">OrderNo</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderNo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image src={row.customerImage} alt={row.customerName} />
                {row.customerName}
              </TableCell>
              <TableCell align="right">{row.orderNo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right" sx={{ textAlign: "-webkit-right" }}>
                {row.status === "Delivered" ? (
                  <Typography
                    sx={{
                      width: "75px",
                      padding: "5px",
                      backgroundColor: "#00800047",
                      color: "#008000",
                      borderRadius: "15px",
                      textAlign: "center",
                    }}
                  >
                    {row.status}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      width: "75px",
                      padding: "5px",
                      backgroundColor: "#ff000038",
                      color: "#ff0000",
                      borderRadius: "15px",
                      textAlign: "center",
                    }}
                  >
                    {row.status}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
