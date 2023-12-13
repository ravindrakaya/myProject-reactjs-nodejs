import { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import "./index.css";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    isChecked: false,
    validation: false,
  };

  onChangeCheckbox = (event) => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  onClickRegisterBtn = (event) => {
    event.preventDefault();
    const { isChecked, name, email, phone, username, password } = this.state;
    if (isChecked) {
      const userCredentials = { name, email, phone, username, password };
      console.log(userCredentials);
    } else {
      this.setState((prevState) => ({
        validation: !prevState.validation,
      }));
    }
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onChange = () => {};

  render() {
    const {
      name,
      email,
      phone,
      username,
      password,
      isChecked,
      validation,
    } = this.state;
    const displayWarning = validation
      ? "*You should agree terms and conditions"
      : "";

    return (
      <div className="registration-container">
        <h1 className="register-heading">Sign up</h1>
        <form className="form-container" onSubmit={this.onClickRegisterBtn}>
          <div className="input-container">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter Your Name"
              className="input-field"
              onChange={this.onChangeName}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="input-field"
              value={email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone" className="input-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              placeholder="Enter Your Mobile Number"
              className="input-field"
              onChange={this.onChangePhone}
            />
          </div>
          <div className="input-container">
            <label htmlFor="Username" className="input-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              className="input-field"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="input-field"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <ReCAPTCHA
            sitekey="6LeyTS8pAAAAADXqM2T0xoglP38BG3zuvKqMHd01"
            onChange={this.onChange}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox-field"
              onChange={this.onChangeCheckbox}
              value={isChecked}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              I agree to the
              <span className="span-el">Terms and Conditions</span>
            </label>
          </div>
          {validation && <p className="validation">{displayWarning}</p>}

          <button type="submit" className="register-btn">
            Register
          </button>

          <p>Already have account Login here</p>
          <Link to="/login" className="link-element1">
            <button type="button" className="login-btn1">
              Login
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
export default Registration;
