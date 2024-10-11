import { ComponentProps } from "react"

type ButtonProps = ComponentProps<'button'>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest}>{children}</button>
  );
};

export default Button;