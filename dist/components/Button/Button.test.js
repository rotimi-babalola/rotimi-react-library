"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const index_1 = __importDefault(require("./index"));
afterEach(react_2.cleanup);
describe('Button', () => {
    const onClickSpy = jest.fn();
    const renderButton = () => react_2.render(react_1.default.createElement(index_1.default, { onClick: onClickSpy }, "Click me"));
    it('should match snapshot', () => {
        const { asFragment } = renderButton();
        expect(asFragment).toMatchSnapshot();
    });
    it('should call onClick callback', () => {
        const { getByText } = renderButton();
        react_2.fireEvent.click(getByText('Click me'));
        expect(onClickSpy).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Button.test.js.map