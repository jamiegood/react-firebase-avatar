import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { error } from "console";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";

// import LoginForm, { Props } from "../LoginForm";
import JamieComponent from "./JamieComponent";

// function renderLoginForm(props: Partial<Props> = {}) {
// const defaultProps: Props = {
//   onPasswordChange() {
//     return;
//   },
//   onRememberChange() {
//     return;
//   },
//   onUsernameChange() {
//     return;
//   },
//   onSubmit() {
//     return;
//   },
//   shouldRemember: true,
// };
// //   return render(<LoginForm {...defaultProps} {...props} />);
// // }
// const defaultProps: Props = {
//   onPasswordChange() {
//     return;
//   },
//   onRememberChange() {
//     return;
//   },
//   onUsernameChange() {
//     return;
//   },
//   onSubmit() {
//     return;
//   },
//   shouldRemember: true,
// };
describe("<JamieComponent />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    console.debug("do i get this far");
    // @ts-ignore
    error("This is an error");

    render(<JamieComponent />);
    // const { findByTestId } = renderLoginForm();
    // console.log(findByTestId);

    // screen.getByText("Jamie");
    // expect(screen.queryByText("JamieX")).toBeNull;
    // expect(screen.queryByText("Jamie")).toBeInTheDocument;

    expect(screen.getByText("Jamie")).toBeInTheDocument();

    const linkElement = screen.getByText(/Jamie/i);
    expect(linkElement).toBeInTheDocument();

    // const loginForm = await findByTestId("login-form");
    // expect(loginForm).toHaveFormValues({
    //   username: "",
    //   password: "",
    //   remember: true,
    // });
  });

  // test("should allow entering a username", async () => {
  //   const onUsernameChange = jest.fn();
  //   const { findByTestId, debug } = renderLoginForm({ onUsernameChange });
  //   const username = await findByTestId("username");

  //   fireEvent.change(username, { target: { value: "test" } });

  //   expect(onUsernameChange).toHaveBeenCalledWith("test");
  // });

  // test("should allow entering a password", async () => {
  //   const onPasswordChange = jest.fn();
  //   const { findByTestId } = renderLoginForm({ onPasswordChange });
  //   const username = await findByTestId("password");

  //   fireEvent.change(username, { target: { value: "password" } });

  //   expect(onPasswordChange).toHaveBeenCalledWith("password");
  // });

  // test("should allow toggling remember me", async () => {
  //   const onRememberChange = jest.fn();
  //   const { findByTestId } = renderLoginForm({
  //     onRememberChange,
  //     shouldRemember: false,
  //   });
  //   const remember = await findByTestId("remember");

  //   fireEvent.click(remember);

  //   expect(onRememberChange).toHaveBeenCalledWith(true);

  //   fireEvent.click(remember);

  //   expect(onRememberChange).toHaveBeenCalledWith(false);
  // });

  // test("should submit the form with username, password, and remember", async () => {
  //   const onSubmit = jest.fn();
  //   const { findByTestId } = renderLoginForm({
  //     onSubmit,
  //     shouldRemember: false,
  //   });
  //   const username = await findByTestId("username");
  //   const password = await findByTestId("password");
  //   const remember = await findByTestId("remember");
  //   const submit = await findByTestId("submit");

  //   fireEvent.change(username, { target: { value: "test" } });
  //   fireEvent.change(password, { target: { value: "password" } });
  //   fireEvent.click(remember);
  //   fireEvent.click(submit);

  //   expect(onSubmit).toHaveBeenCalledWith("test", "password", true);
  // });
});
