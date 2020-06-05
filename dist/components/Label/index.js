"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledLabel = styled_components_1.default.label `
  font-size: 16px;
  color: palevioletred;
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  margin-bottom: 5px;
`;
const Label = ({ children, htmlFor }) => (react_1.default.createElement(StyledLabel, { htmlFor: htmlFor }, children));
exports.default = Label;
//# sourceMappingURL=index.js.map