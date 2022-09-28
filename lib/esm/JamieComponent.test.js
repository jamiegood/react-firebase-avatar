var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
describe("<JamieComponent />", function () {
    test("should display a blank login form, with remember me checked by default", function () { return __awaiter(void 0, void 0, void 0, function () {
        var linkElement;
        return __generator(this, function (_a) {
            console.debug("do i get this far");
            // @ts-ignore
            error("This is an error");
            render(React.createElement(JamieComponent, null));
            // const { findByTestId } = renderLoginForm();
            // console.log(findByTestId);
            // screen.getByText("Jamie");
            // expect(screen.queryByText("JamieX")).toBeNull;
            // expect(screen.queryByText("Jamie")).toBeInTheDocument;
            expect(screen.getByText("Jamie")).toBeInTheDocument();
            linkElement = screen.getByText(/Jamie/i);
            expect(linkElement).toBeInTheDocument();
            return [2 /*return*/];
        });
    }); });
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
