"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const index_1 = __importDefault(require("./index"));
afterAll(react_2.cleanup);
describe('Input', () => {
    const onChangeSpy = jest.fn();
    const renderInput = () => react_2.render(react_1.default.createElement(index_1.default, { onChange: onChangeSpy, name: "input", type: "text", isRequired: true, "data-testid": "input" }));
    it('should match snapshot', () => {
        const { asFragment } = renderInput();
        expect(asFragment).toMatchSnapshot();
    });
    it('should call onChange callback', () => {
        const { getByTestId } = renderInput();
        const input = getByTestId('input');
        react_2.fireEvent.change(input, { target: { value: 'Rotimi' } });
        expect(onChangeSpy).toHaveBeenCalled();
        expect(input.value).toBe('Rotimi');
    });
});
//# sourceMappingURL=Input.test.js.map