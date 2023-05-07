import React from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import UseMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/header";
import { Navigate } from "react-router-dom";

const initialValues = {
  name: "",
  description: "",
  inspiration: "",
  fabric: "",
  image: "",
  price: "",
  category: "",
  sexe: "",
  stock: "",
  promo: "",
};

const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  inspiration: yup.string(),
  fabric: yup.string(),
  image: yup.string().required("Image is required"),
  price: yup.number().required("Price is required"),
  category: yup.string().required("Category is required"),
  sexe: yup.string().required("Sexe is required"),
  stock: yup.number().required("Stock is required"),
  promo: yup.number(),
});

const AddProduct = () => {
  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3100/create", values)
      .then(() => {
        Navigate("/Dashboard/addproduct");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isNonMobile = UseMediaQuery("(min-width: 600px)");

  return (
    <Box m="20px">
      <Header title="CREATE PRODUCT" subtitle="Create a New Product" />

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Inspiration"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.inspiration}
                name="inspiration"
                error={!!touched.inspiration && !!errors.inspiration}
                helperText={touched.inspiration && errors.inspiration}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fabric"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fabric}
                name="fabric"
                error={!!touched.fabric && !!errors.fabric}
                helperText={touched.fabric && errors.fabric}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sexe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sexe}
                name="sexe"
                error={!!touched.sexe && !!errors.sexe}
                helperText={touched.sexe && errors.sexe}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Stock"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stock}
                name="stock"
                error={!!touched.stock && !!errors.stock}
                helperText={touched.stock && errors.stock}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Promo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.promo}
                name="promo"
                error={!!touched.promo && !!errors.promo}
                helperText={touched.promo && errors.promo}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProduct;
