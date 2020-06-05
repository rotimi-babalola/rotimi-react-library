"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledInput = styled_components_1.default.input `
  width: 100%;
  height: 2rem;
  font-size: 16px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 4px;
  margin: 0 auto;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
`;
const Input = (_a) => {
    var { onChange, name, placeholder, type, isRequired } = _a, props = __rest(_a, ["onChange", "name", "placeholder", "type", "isRequired"]);
    return (react_1.default.createElement(StyledInput, Object.assign({ onChange: onChange, type: type, name: name, placeholder: placeholder, required: isRequired }, props)));
};
exports.default = Input;
//# sourceMappingURL=index.js.map