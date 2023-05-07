import { Box } from "@mui/material";
import Header from "../../components/header";
import PieChart from "../../components/PieChart";

const CategoriesChart = () => {
  return (
    <Box m="20px">
      <Header
        title="Categories Chart"
        subtitle="Data about every category of the products"
      />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default CategoriesChart;
