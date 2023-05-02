/* eslint-disable no-useless-escape */

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const mobileRegex = /^[6-9][0-9]{9}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegex = /^[A-Za-z\s]+$/;

const formInitialValues = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const errorInitialValues = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const [error, setError] = useState(errorInitialValues);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Successfully");
    setFormValues(formInitialValues);
    setError(errorInitialValues);
    setDisabled(true);
  };

  const formValidation = (name, value) => {
    if (value === "") {
      setError((prevState) => ({
        ...prevState,
        [name]: `${name} is required`,
      }));
      return;
    }
    switch (name) {
      case "name":
        if (nameRegex.test(value) === false) {
          setError((prevState) => ({
            ...prevState,
            [name]: "Name should contain only letters",
          }));
        } else {
          setError((prevState) => ({ ...prevState, [name]: null }));
        }
        break;
      case "email":
        if (emailRegex.test(value) === false) {
          setError((prevState) => ({
            ...prevState,
            [name]: "Enter in correct mail id format",
          }));
        } else {
          setError((prevState) => ({ ...prevState, [name]: null }));
        }
        break;
      case "mobile":
        if (mobileRegex.test(value) === false) {
          setError((prevState) => ({
            ...prevState,
            [name]: "Number should be a 10 digit number starting with 6-9",
          }));
        } else {
          setError((prevState) => ({ ...prevState, [name]: null }));
        }
        break;
      default:
        setError((prevState) => ({ ...prevState, [name]: null }));
        break;
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
    setError((prevState) => ({ ...prevState, [name]: null }));
    formValidation(name, value);
    if (
      error.name == null &&
      error.email == null &&
      error.mobile == null &&
      error.message == null
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <Box>
      <Typography variant="h6">Contact Form</Typography>
      <Typography variant="body2">
        Fill the form and will contact you right back!!!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} sx={{ my: "10px" }}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="name"
              variant="outlined"
              placeholder="Enter your Full Name"
              value={formValues.name}
              onChange={handleInput}
              error={Boolean(error.name)}
              helperText={error.name ? error.name : ""}
              type={"text"}
              size="small"
              color="success"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleInput}
              error={Boolean(error.email)}
              helperText={error.email ? error.email : ""}
              type={"email"}
              size="small"
              color="success"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile Number"
              name="mobile"
              variant="outlined"
              placeholder="Enter your mobile number"
              value={formValues.mobile}
              onChange={handleInput}
              error={Boolean(error.mobile)}
              helperText={error.mobile ? error.mobile : ""}
              type={"text"}
              size="small"
              color="success"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              placeholder="Enter your message"
              value={formValues.message}
              onChange={handleInput}
              error={Boolean(error.message)}
              helperText={error.message ? error.message : ""}
              type={"text"}
              size="small"
              color="success"
              multiline
              rows={4}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              fullWidth
              color={"primary"}
              disableElevation
              disabled={disabled}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
