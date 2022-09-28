"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SayHello = function (_a) {
    var name = _a.name;
    return (react_1.default.createElement("div", null,
        "The name is: ",
        react_1.default.createElement("span", null, name)));
};
exports.default = SayHello;
