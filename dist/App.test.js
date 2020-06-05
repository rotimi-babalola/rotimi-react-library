"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const App_1 = __importDefault(require("./App"));
afterEach(react_1.cleanup);
describe('App', () => {
    it('should render', () => {
        const { asFragment } = react_1.render(react_2.default.createElement(App_1.default, null));
        expect(asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=App.test.js.map