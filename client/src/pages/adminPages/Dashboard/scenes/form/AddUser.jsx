import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import UseMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/header";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const userSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
  role: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  address: yup.string().required("required"),
});

const AddUser = () => {

  const initialValues = {
    username: "",
    password: "",
    role: "",
    email: "",
    address: "",
  };
  

  const [username, setUsername ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [address, setAddress ] = useState('');
  const [role, setRole ] = useState('');
  
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const uid = userCredentials.user.uid;
        const userRef = doc(db, "users", uid);
        const user = { email, password, address, username, role };
        return setDoc(userRef, user);
      }).then(() => {
        navigate('/Dashboard/users')
      }).catch((error) => {
        console.log(error.message);
      });
  }

  const isNonMobile = UseMediaQuery("(min-width: 600px)");

  
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={signUp}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <form onSubmit={signUp}>
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
                onChange={(e) => {
                  handleChange(e);
                  setUsername(e.target.value);
                }}
                value={username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 2" }}
              />


              <Dropdown>
                <Dropdown.Toggle  variant="dark" expand="lg" id="dropdown-basic"
                style={{ gridColumn: "span 2", width: "100%" }}>
                  Role : {role}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setRole('user')}>User</Dropdown.Item>
                  <Dropdown.Item onClick={() => setRole('admin')}>Admin</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>


              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  setPassword(e.target.value);
                }}
                value={password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  setEmail(e.target.value);
                }}
                value={email}
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
                onChange={(e) => {
                  handleChange(e);
                  setAddress(e.target.value);
                }}
                value={address}
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
