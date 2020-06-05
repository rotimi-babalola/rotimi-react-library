"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const index_1 = __importDefault(require("./index"));
afterEach(react_2.cleanup);
describe('Label', () => {
    it('should match snapshot', () => {
        const { asFragment } = react_2.render(react_1.default.createElement(index_1.default, { htmlFor: "username" }, "Username"));
        expect(asFragment).toMatchSnapshot();
    });
});
//# sourceMappingURL=Label.test.js.map