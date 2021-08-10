import { useFunction } from "../../hooks/useFunction";
import BSButton, { ButtonProps } from "react-bootstrap/Button";
type Props = {
  text: string;
  onClick: Function;
  action?: Array<string> | string;
  renderer: RendererProps;
};
type RendererProps = (text: string, buttonProps: ButtonProps) => JSX.Element;
export const Button = ({
  text,
  onClick,
  action,
  renderer = DefaultButton,
  ...props
}: Props & ButtonProps) => {
  const handler = useFunction(action);
  const handleOnClick = () => {
    if (onClick) {
      // @ts-ignore
      onClick();
    } else if (handler) {
      handler();
    }
  };
  return renderer(text, {
    onClick: handleOnClick,
    ...props,
  });
};

const DefaultButton: RendererProps = (text, buttonProps) => (
  <BSButton type="submit" {...buttonProps}>
    {text}
  </BSButton>
);
