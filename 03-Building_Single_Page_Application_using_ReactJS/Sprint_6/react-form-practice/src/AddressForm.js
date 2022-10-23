import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  {
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .min(8, "Minimum 8 chars required")
          .required("Required"),
        lastName: Yup.string()
          .min(8, "Minimum 8 chars required")
          .required("Required"),
        address1: Yup.string()
          .min(32, "Minimum 32 chars required")
          .required("Required"),
        city: Yup.string().required("Required"),
        zip: Yup.string()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(6, "Must be exactly 6 digits")
          .max(6, "Must be exactly 6 digits")
          .required("Required"),
        country: Yup.string().required("Required"),
      }),
      onSubmit: (values) => {},
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Shipping address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <p>{formik.errors.firstName}</p>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.address1}
              />
              {formik.errors.address1 ? <p>{formik.errors.address1}</p> : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.address2}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              {formik.errors.city ? <p>{formik.errors.city}</p> : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.state}
              />
              {formik.errors.state ? <p>{formik.errors.state}</p> : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.Zip}
              />
              {formik.errors.zip ? <p>{formik.errors.zip}</p> : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
              {formik.errors.country ? <p>{formik.errors.country}</p> : null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </form>
    );
  }
};
export default Signup;
