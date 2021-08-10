import { Container, ContainerProps } from "react-bootstrap";

type Props = {
  text: string;
  renderer: RendererProps;
};
type RendererProps = (text: string, props: ContainerProps) => JSX.Element;

export const Header = ({ text, renderer = _Container, ...props }: Props) => {
  return _Container(text, props);
};
const _Container: RendererProps = (text, props) => (
  <Container {...props}>{text}</Container>
);
