import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Component } from "react";

const ariaLabel = { "aria-label": "description" };

class Form extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //First Name Required
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    } else {
      let len = fields["firstName"].length;
      if (len < 8) {
        formIsValid = false;
        errors["firstName"] = "Cannot be less than 8 characters";
      }
    }

    // Last Name Required
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    } else {
      let len = fields["lastName"].length;
      if (len < 8) {
        formIsValid = false;
        errors["lastName"] = "Cannot be less than 8 characters";
      }
    }

    // Address 1 Required
    if (!fields["address1"]) {
      formIsValid = false;
      errors["address1"] = "Cannot be empty";
    } else {
      let len = fields["address1"].length;
      if (len < 32) {
        formIsValid = false;
        errors["address1"] = "Cannot be less than 32 characters";
      }
    }

    // City Required
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "Cannot be empty";
    }

    // Zip Required
    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "Cannot be empty";
    } else {
      let len = fields["zip"].length;
      if (len !== 6) {
        formIsValid = false;
        errors["zip"] = "Excatly 6 characters";
      }
    }

    // Country Required
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    if (this.handleValidation() === false) {
      e.preventDefault();
      alert("Form has errors");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" value="FistName" />
        </label>
        <label>
          Last:
          <input type="text" value="ListName" />
        </label>
        <label>
          Address1:
          <input type="text" />
        </label>
        <label>
          city:
          <input type="text" />
        </label>
        <label>
          zip:
          <input type="number" />
        </label>
      </form>
      // <Box
      //   component="form"
      //   sx={{
      //     "& > :not(style)": { m: 1 }
      //   }}
      //   noValidate
      //   autoComplete="off"
      //   className="form"
      // >
      //   <h1>Checkout</h1>
      //   <br />
      //   <br />
      //   <h3>Shipping address</h3>
      //   <br />

      //   <form>
      //     <Input
      //       placeholder="First name *"
      //       inputProps={ariaLabel}
      //       name="firstName"
      //       onChange={this.handleChange.bind(this, "firstName")}
      //       value={this.state.fields["firstName"]}
      //     />
      //     <span className="error">{this.state.errors["firstName"]}</span>
      //     <Input
      //       placeholder="Last name *"
      //       inputProps={ariaLabel}
      //       name="lastName"
      //       onChange={this.handleChange.bind(this, "lastName")}
      //       value={this.state.fields["lastName"]}
      //     />
      //     <span className="error">{this.state.errors["lastName"]}</span>

      //     <br />

      //     <Input
      //       placeholder="Address line 1 *"
      //       style={{ width: "407px" }}
      //       name="address1"
      //       onChange={this.handleChange.bind(this, "address1")}
      //       value={this.state.fields["address1"]}
      //     />
      //     <span className="error">{this.state.errors["address1"]}</span>

      //     <br />

      //     <Input
      //       placeholder="Address line 2"
      //       style={{ width: "407px" }}
      //       name="address2"
      //       onChange={this.handleChange.bind(this, "address2")}
      //       value={this.state.fields["address2"]}
      //     />
      //     <br />

      //     <Input
      //       placeholder="City *"
      //       inputProps={ariaLabel}
      //       name="city"
      //       onChange={this.handleChange.bind(this, "city")}
      //       value={this.state.fields["city"]}
      //     />
      //     <span className="error">{this.state.errors["city"]}</span>

      //     <Input
      //       placeholder="State/ Province/ Region"
      //       inputProps={ariaLabel}
      //       name="state"
      //       onChange={this.handleChange.bind(this, "state")}
      //       value={this.state.fields["state"]}
      //     />
      //     <br />

      //     <Input
      //       placeholder="Zip/ Postal code *"
      //       inputProps={ariaLabel}
      //       type="number"
      //       name="zip"
      //       onChange={this.handleChange.bind(this, "zip")}
      //       value={this.state.fields["zip"]}
      //     />
      //     <span className="error">{this.state.errors["zip"]}</span>

      //     <Input
      //       placeholder="Country *"
      //       inputProps={ariaLabel}
      //       name="country"
      //       onChange={this.handleChange.bind(this, "country")}
      //       value={this.state.fields["country"]}
      //     />
      //     <span className="error">{this.state.errors["country"]}</span>

      //     <br />

      //     <FormControlLabel
      //       control={<Checkbox />}
      //       label="Use this address for payment details"
      //     />
      //     <br />

      //     <input
      //       type="submit"
      //       value="Next"
      //       onClick={this.contactSubmit.bind(this)}
      //       className="btn-Next"
      //     />
      //   </form>
      // </Box>
    );
  }
}
export default Form;
