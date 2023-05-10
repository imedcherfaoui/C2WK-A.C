import { Box } from "@mui/material";
import Header from "../../components/header";
import LineChart from "../../components/LineChart";

const SalesChart = () => {
  return (
    <Box m="20px">
      <Header
        title="Sales Chart"
        subtitle="Data about every category sales per month"
      />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default SalesChart;
