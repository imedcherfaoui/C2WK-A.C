import React from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import UseMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/header";
import { Navigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
  role: "",
  email: "",
  address: "",
};

const userSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
  role: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  address: yup.string().required("required"),
});

const AddUser = () => {

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3100/register", values)
      .then(() => {
        Navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isNonMobile = UseMediaQuery("(min-width: 600px)");

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
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
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="Text"
                label="Role"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="role"
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddUser;
