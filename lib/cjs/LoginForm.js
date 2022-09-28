"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function LoginForm(props) {
    var _a = react_1.default.useState(""), username = _a[0], setUsername = _a[1];
    var _b = react_1.default.useState(""), password = _b[0], setPassword = _b[1];
    var _c = react_1.default.useState(props.shouldRemember), remember = _c[0], setRemember = _c[1];
    var handleUsernameChange = function (e) {
        var value = e.target.value;
        setUsername(value);
        props.onUsernameChange(value);
    };
    var handlePasswordChange = function (e) {
        var value = e.target.value;
        setPassword(value);
        props.onPasswordChange(value);
    };
    var handleRememberChange = function (e) {
        var checked = e.target.checked;
        setRemember(checked);
        props.onRememberChange(checked);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        props.onSubmit(username, password, remember);
    };
    return (react_1.default.createElement("form", { "data-testid": "login-form", onSubmit: handleSubmit },
        react_1.default.createElement("label", { htmlFor: "username" }, "Username:"),
        react_1.default.createElement("input", { "data-testid": "username", type: "text", name: "username", value: username, onChange: handleUsernameChange }),
        react_1.default.createElement("label", { htmlFor: "password" }, "Password:"),
        react_1.default.createElement("input", { "data-testid": "password", type: "password", name: "password", value: password, onChange: handlePasswordChange }),
        react_1.default.createElement("label", null,
            react_1.default.createElement("input", { "data-testid": "remember", name: "remember", type: "checkbox", checked: remember, onChange: handleRememberChange }),
            "Remember me?"),
        react_1.default.createElement("button", { type: "submit", "data-testid": "submit" }, "Sign in")));
}
exports.default = LoginForm;
