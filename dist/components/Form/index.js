"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Label_1 = __importDefault(require("../Label"));
const Input_1 = __importDefault(require("../Input"));
const Button_1 = __importDefault(require("../Button"));
const ContainerDiv = styled_components_1.default.div `
  margin-bottom: 10px;
`;
const Form = ({ onSubmit }) => (react_1.default.createElement("form", { onSubmit: onSubmit, "data-testid": "submit-form" },
    react_1.default.createElement(ContainerDiv, null,
        react_1.default.createElement(Label_1.default, { htmlFor: "username" }, "Username"),
        react_1.default.createElement(Input_1.default, { name: "username", placeholder: "Type your username", type: "text", isRequired: true, "data-testid": "username" })),
    react_1.default.createElement(ContainerDiv, null,
        react_1.default.createElement(Label_1.default, { htmlFor: "password" }, "Password"),
        react_1.default.createElement(Input_1.default, { name: "passwprd", placeholder: "Password", type: "password", isRequired: true, "data-testid": "password" })),
    react_1.default.createElement(ContainerDiv, null,
        react_1.default.createElement(Label_1.default, { htmlFor: "email" }, "Email"),
        react_1.default.createElement(Input_1.default, { name: "email", placeholder: "Enter your email", type: "email", isRequired: true, "data-testid": "email" })),
    react_1.default.createElement(Button_1.default, { "data-testid": "submit-button", type: "submit" }, "Sign in")));
exports.default = Form;
//# sourceMappingURL=index.js.map