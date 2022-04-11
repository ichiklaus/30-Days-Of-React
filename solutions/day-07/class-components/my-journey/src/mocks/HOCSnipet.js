import HOCStyledButton from '../mocks/HOCStyledButton';
// import buttonWithStyle from '../mocks/HigherOrderComponent';
import Button from '../mocks/AButton';

const ReactButton = HOCStyledButton(Button, "react");
const SuccessButton = HOCStyledButton(Button, "success");
const InfoButton = HOCStyledButton(Button, "info");
const WarningButton = HOCStyledButton(Button, "warning");
const DangerButton = HOCStyledButton(Button, "danger");
const DefaultButton = HOCStyledButton(Button, "default")


export { ReactButton, SuccessButton, InfoButton, WarningButton, DangerButton, DefaultButton };