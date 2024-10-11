import { ComponentProps } from "react"

type CardProps = ComponentProps<'div'>;

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <div {...rest}>{children}</div>
  );
};

export default Card;