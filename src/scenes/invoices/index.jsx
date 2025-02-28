import React, { useState, useMemo } from "react";
import { Box, Typography, useTheme, TextField, Grid, Paper } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import SearchIcon from "@mui/icons-material/Search";

// Custom Toolbar สำหรับหน้า Invoices
const CustomToolbarInvoices = ({ searchQuery, setSearchQuery }) => {
  return (
    <GridToolbarContainer sx={{ justifyContent: "space-between", p: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchIcon sx={{ mr: 1 }} />
        <TextField
          variant="standard"
          placeholder="ค้นหา..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{ disableUnderline: true }}
        />
      </Box>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchQuery, setSearchQuery] = useState("");

  const columns = [
    { field: "id", headerName: "ID", flex: 1, align: "center", headerAlign: "center" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1, align: "center", headerAlign: "center" },
    { field: "email", headerName: "Email", flex: 1, align: "center", headerAlign: "center" },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB",
          }).format(parseFloat(params.row.cost))}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1, align: "center", headerAlign: "center" },
  ];

  // กรองข้อมูลใบแจ้งหนี้ตามคำค้นหาแบบเรียลไทม์
  const filteredRows = useMemo(() => {
    if (!searchQuery) return mockDataInvoices;
    return mockDataInvoices.filter((row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // คำนวณผลรวมของยอดใบแจ้งหนี้
  const totalCost = filteredRows.reduce((sum, row) => sum + parseFloat(row.cost), 0);

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />

      {/* ส่วนสรุปข้อมูล */}
      <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: colors.primary[400] }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6" color={colors.grey[100]}>
              Total Invoices: {filteredRows.length}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color={colors.greenAccent[500]}>
              Total Cost:{" "}
              {new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB" }).format(totalCost)}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color={colors.grey[100]}>
              Last Updated: {new Date().toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
          "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={filteredRows}
          columns={columns}
          components={{ Toolbar: CustomToolbarInvoices }}
          componentsProps={{ toolbar: { searchQuery, setSearchQuery } }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
