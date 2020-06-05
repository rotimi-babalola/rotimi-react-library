"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const index_1 = __importDefault(require("./index"));
afterEach(react_2.cleanup);
describe('Form', () => {
    const onSubmitSpy = jest.fn();
    const renderForm = () => react_2.render(react_1.default.createElement(index_1.default, { onSubmit: onSubmitSpy }));
    it('should match snapshot', () => {
        const { asFragment } = renderForm();
        expect(asFragment).toMatchSnapshot();
    });
    it('should call onSubmit callback', () => {
        const { getByTestId } = renderForm();
        const usernameInput = getByTestId('username');
        const passwordInput = getByTestId('password');
        const emailInput = getByTestId('email');
        expect(usernameInput.value).toBe('');
        react_2.fireEvent.change(usernameInput, { target: { value: 'Rotimi' } });
        react_2.fireEvent.change(passwordInput, { target: { value: 'admin123' } });
        react_2.fireEvent.change(emailInput, { target: { value: 'rotimi@email.com' } });
        react_2.fireEvent.submit(getByTestId('submit-form'));
        expect(onSubmitSpy).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Form.test.js.map