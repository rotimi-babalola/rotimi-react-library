"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Form_1 = __importDefault(require("./components/Form"));
const StyledDiv = styled_components_1.default.div `
  margin: auto;
  width: 50%;
  font-family: 'Roboto', sans-serif;
`;
const App = () => (react_1.default.createElement(StyledDiv, null,
    react_1.default.createElement("h1", { style: { color: 'palevioletred' } }, "Create Account"),
    react_1.default.createElement(Form_1.default, null)));
exports.default = App;
//# sourceMappingURL=App.js.map