"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function JamieComponent() {
    var username = react_1.default.useState("")[0];
    var handleSubmit = function (e) {
        e.preventDefault();
        // props.onSubmit(username, password, remember);
    };
    return (react_1.default.createElement("form", { "data-testid": "login-form", onSubmit: handleSubmit },
        react_1.default.createElement("label", { htmlFor: "username" }, "Username:"),
        react_1.default.createElement("input", { "data-testid": "username", type: "text", name: "username", value: username }),
        react_1.default.createElement("button", { type: "submit", "data-testid": "submit" }, "Jamie")));
}
exports.default = JamieComponent;
