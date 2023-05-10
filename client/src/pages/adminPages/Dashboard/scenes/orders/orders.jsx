import { Box, useTheme, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/header";
import { useEffect, useState } from "react";

const Orders = () => {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
        setIsLoading(false);
      });
  }, []);

  console.log("backendData", backendData);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "description", headerName: "DESCRIPTION", flex: 1 },
    { field: "price", headerName: "PRICE", flex: 1 },
    { field: "category", headerName: "CATEGORY", flex: 1 },
    { field: "sexe", headerName: "SEXE", flex: 1 },
    { field: "stock", headerName: "STOCK", flex: 1 },
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box m="20px">
      <Header title="Orders" subtitle="Managing the orders" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={backendData.data} columns={columns} pageSize={10} />
      </Box>
    </Box>
  );
};

export default Orders;
